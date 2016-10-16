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
      }
    }).toPromise();
  }

  ngOnDestroy() {
    this.commentsPageSub.unsubscribe();
  }

}
