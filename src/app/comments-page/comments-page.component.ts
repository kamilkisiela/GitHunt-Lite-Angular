import { Component, OnInit, OnDestroy } from '@angular/core';
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
  repoFullName: string;
  commentsPageSub: Subscription;

  constructor(
    private apollo: Angular2Apollo
  ) { }

  ngOnInit() {
    this.commentsPageSub = this.apollo.watchQuery({
      query: commentsPageQuery
    }).subscribe(({data}) => {
      this.currentUser = data.currentUser;
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
