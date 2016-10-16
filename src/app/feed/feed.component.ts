import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  feed: Observable<Object[]>;

  constructor() { }

  ngOnInit() {
    this.feed = Observable.of([
      {
        repository: {
          owner: 'angular',
          name: 'angularjs'
        }
      },
      {
        repository: {
          owner: 'facebook',
          name: 'react'
        }
      }
    ]);
  }

}
