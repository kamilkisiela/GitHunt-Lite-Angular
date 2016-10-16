import { Component, OnInit, OnDestroy } from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';
import { Subscription } from 'rxjs/Subscription';

import { OnSubmitEvent } from '../new-comment/new-comment.models';
import { commentsPageQuery } from './comments-page.models';

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.scss']
})
export class CommentsPageComponent implements OnInit, OnDestroy {
  currentUser: Object;
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
    // action
  }

  ngOnDestroy() {
    this.commentsPageSub.unsubscribe();
  }

}
