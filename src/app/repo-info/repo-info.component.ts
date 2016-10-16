import { Component, Input } from '@angular/core';
import { Angular2Apollo } from 'angular2-apollo';

import { commentsPageQuery } from '../comments-page/comments-page.models';

@Component({
  selector: 'app-repo-info',
  templateUrl: './repo-info.component.html',
  styleUrls: ['./repo-info.component.scss']
})
export class RepoInfoComponent {
  @Input() name: string;
  @Input() owner: string;
  @Input() description: string;
  @Input() stars: number;
  @Input() issues: number;
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
        repoName: `${this.owner}/${this.name}`
      }
    });
  }
}
