import { Component } from '@angular/core';

@Component({
  selector: 'app-new-comment',
  templateUrl: './new-comment.component.html',
  styleUrls: ['./new-comment.component.scss']
})
export class NewCommentComponent {
  comment: string;

  constructor() { }

  submit() {
    if (this.comment && this.comment.length > 0) {
      // an action
    }
  }

}
