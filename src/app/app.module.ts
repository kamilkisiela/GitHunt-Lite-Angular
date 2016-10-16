import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApolloModule } from 'angular2-apollo';

import { AppComponent } from './app.component';
import { client } from './apollo';
import { NavigationComponent } from './navigation/navigation.component';
import { FeedComponent } from './feed/feed.component';
import { routes } from './app.routes';
import { EntryComponent } from './entry/entry.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeedComponent,
    EntryComponent,
    NewEntryComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ApolloModule.withClient(client)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
