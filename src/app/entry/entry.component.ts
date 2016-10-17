import { Component, Input } from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';

import { commentsPageQuery } from '../comments-page/comments-page.models';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent {
  @Input() repository: Object;
  @Input() createdAt: Date;
  @Input() postedBy: string;
  @Input() commentsCount: number;
  
  constructor(
    private apollo: Angular2Apollo
  ) {}

  prefetchCommentsPage() {
    this.apollo.query({
      query: commentsPageQuery,
      variables: {
        repoName: `${this.repository['owner']}/${this.repository['name']}`
      }
    });
  }
}
