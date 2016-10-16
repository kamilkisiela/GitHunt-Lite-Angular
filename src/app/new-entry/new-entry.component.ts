import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Angular2Apollo } from 'angular2-apollo';
import { ApolloError } from 'apollo-client';

import gql from 'graphql-tag';

import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-new-entry',
  templateUrl: './new-entry.component.html',
  styleUrls: ['./new-entry.component.scss']
})
export class NewEntryComponent {
  error: string;
  repoFullName: string;

  constructor(
    private apollo: Angular2Apollo,
    private router: Router
  ) { }

  submit() {
    if (!this.repoFullName) {
      return;
    }

    this.error = null;

    this.apollo.mutate({
      mutation: gql`
        mutation submitRepository($repoFullName: String!) {
          
          submitRepository(repoFullName: $repoFullName) {
            createdAt
          }

        }
      `,
      variables: {
        repoFullName: this.repoFullName,
      },
    })
      .toPromise()
      .then(() => {
        this.router.navigate(['/']);
      })
      .catch((error: ApolloError) => {
        this.error = error.message;
      });
  }

}
