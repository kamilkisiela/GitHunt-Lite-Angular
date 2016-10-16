import { Component } from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';

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
    private apollo: Angular2Apollo
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
          // success
      })
      .catch((error) => {
        // error
      });
  }

}
