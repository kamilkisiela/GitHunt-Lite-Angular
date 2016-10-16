import { Component, OnInit } from '@angular/core';
import { Angular2Apollo, ApolloQueryObservable } from 'angular2-apollo';
import { ApolloQueryResult } from 'apollo-client';

import gql from 'graphql-tag';

import 'rxjs/add/operator/map';

const feedQuery = gql`
  query Feed {
    feed {
      repository {
        name
        owner
      }
    }
  }
`;

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  feed: ApolloQueryObservable<ApolloQueryResult>;

  constructor(
    private apollo: Angular2Apollo
  ) { }

  ngOnInit() {
    this.feed = this.apollo.watchQuery({
      query: feedQuery
    })
      .map(result => result.data.feed) as ApolloQueryObservable<ApolloQueryResult>;
  }

}
