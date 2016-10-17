import { Component, Input } from '@angular/core';

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
}
