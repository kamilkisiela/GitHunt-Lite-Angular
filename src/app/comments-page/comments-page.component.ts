import { Component, OnInit } from '@angular/core';

import { OnSubmitEvent } from '../new-comment/new-comment.models';

@Component({
  selector: 'app-comments-page',
  templateUrl: './comments-page.component.html',
  styleUrls: ['./comments-page.component.scss']
})
export class CommentsPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(event: OnSubmitEvent) {
    // action
  }

}
