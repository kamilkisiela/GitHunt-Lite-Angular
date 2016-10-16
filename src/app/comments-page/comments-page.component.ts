import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Angular2Apollo } from 'angular2-apollo';
import { Subscription } from 'rxjs/Subscription';

import 'rxjs/add/operator/toPromise';

import { OnSubmitEvent } from '../new-comment/new-comment.models';
import { commentsPageQuery, submitCommentMutation } from './comments-page.models';

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.scss']
})
export class CommentsPageComponent implements OnInit, OnDestroy {
  currentUser: Object;
  entry: Object;
  loading: boolean = true;
  name: string;
  owner: string;
  repoFullName: string;
  commentsPageSub: Subscription;
  paramsSub: Subscription;

  constructor(
    private apollo: Angular2Apollo,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.paramsSub = this.route.params.subscribe((params) => {
      this.name = params['name'];
      this.owner = params['owner'];
      this.repoFullName = `${this.owner}/${this.name}`;
      this.loading = true;

      if (this.commentsPageSub) {
        this.commentsPageSub.unsubscribe();
        this.commentsPageSub = undefined;
      }

      this.commentsPageSub = this.apollo.watchQuery({
        query: commentsPageQuery,
        variables: {
          repoName: this.repoFullName
        }
      }).subscribe(({data, loading}) => {
        this.currentUser = data.currentUser;
        this.entry = data.entry;
        this.loading = loading;
      });
    });

  }

  onSubmit(event: OnSubmitEvent) {
    if (!this.currentUser) {
      return;
    }

    this.apollo.mutate({
      mutation: submitCommentMutation,
      variables: {
        repoFullName: this.repoFullName,
        commentContent: event.comment
      },
      updateQueries: {
        commentsPage: (prev, { mutationResult }) => {
          // get the new comment from the mutation's result
          const newComment = mutationResult['data'].submitComment;

          // check if comment has already been added 
          if (isDuplicateComment(newComment, prev['entry'].comments)) {
            return prev;
          }

          // create a new entry
          const newEntry = Object.assign({}, prev['entry'], {
            // prepend comments with our new comment
            comments: [newComment, ...prev['entry'].comments]
          });

          // create a new object with the recently created entry
          return Object.assign({}, prev, {
            entry: newEntry
          });
        }
      },
      optimisticResponse: {
        __typename: 'Mutation',
        // think of it as a initial data for mutation's result object
        submitComment: { // name of the mutation
          __typename: 'Comment', // type that is returned
          id: null,
          postedBy: this.currentUser['login'],
          createdAt: event.createdAt,
          content: event.comment
        }
      },
    }).toPromise();
  }

  ngOnDestroy() {
    this.commentsPageSub.unsubscribe();
  }

}

function isDuplicateComment(newComment: Object, existingComments: Object[]): boolean {
  // use Array.some function to check if there is a comment we're looking for
  return newComment['id'] !== null && existingComments.some(comment => newComment['id'] === comment['id']);
}