import { Component, OnInit, OnDestroy } from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';
import { Subscription } from 'rxjs/Subscription';

import { currentUserQuery } from './profile.models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {
  currentUser: Object;
  currentUserSub: Subscription;

  constructor(
    private apollo: Angular2Apollo
  ) { }

  ngOnInit() {
    this.currentUserSub = this.apollo.watchQuery({
      query: currentUserQuery,
      forceFetch: true
    }).subscribe(({data}) => {
      this.currentUser = data.currentUser;
    });
  }

  ngOnDestroy() {
    this.currentUserSub.unsubscribe();
  }

}
