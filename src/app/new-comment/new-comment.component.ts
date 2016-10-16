import { Component, Output, EventEmitter } from '@angular/core';

import { OnSubmitEvent } from './new-comment.models';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent {
  @Output() onSubmit: EventEmitter<OnSubmitEvent> = new EventEmitter<OnSubmitEvent>();
  comment: string;

  constructor() { }

  submit() {
    if (this.comment && this.comment.length > 0) {
      this.onSubmit.emit({
        comment: this.comment,
        createdAt: new Date
      });

      this.comment = '';
    }
  }

}
