import { Component, OnInit } from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';

import { currentUserQuery } from './profile.models';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  currentUser: Object;

  constructor(
    private apollo: Angular2Apollo
  ) { }

  ngOnInit() {
    this.apollo.watchQuery({
      query: currentUserQuery,
      forceFetch: true
    }).subscribe(({data}) => {
      this.currentUser = data.currentUser;
    });
  }

}
