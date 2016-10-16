import { Route } from '@angular/router';

import { FeedComponent } from './feed/feed.component';
import { NewEntryComponent } from './new-entry/new-entry.component';

export const routes: Route[] = [
  { path: '', component: FeedComponent },
  { path: 'submit', component: NewEntryComponent }
];
