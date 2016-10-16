import { Component, Input } from '@angular/core';

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
}
