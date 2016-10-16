import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ApolloModule } from 'angular2-apollo';
import { EmojifyModule } from 'angular2-emojify';

import { AppComponent } from './app.component';
import { client } from './apollo';
import { NavigationComponent } from './navigation/navigation.component';
import { FeedComponent } from './feed/feed.component';
import { routes } from './app.routes';
import { EntryComponent } from './entry/entry.component';
import { NewEntryComponent } from './new-entry/new-entry.component';
import { ProfileComponent } from './profile/profile.component';
import { RepoInfoComponent } from './repo-info/repo-info.component';
import { CommentsPageComponent } from './comments-page/comments-page.component';
import { NewCommentComponent } from './new-comment/new-comment.component';
import { CommentComponent } from './comment/comment.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FeedComponent,
    EntryComponent,
    NewEntryComponent,
    ProfileComponent,
    RepoInfoComponent,
    CommentsPageComponent,
    NewCommentComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    ApolloModule.withClient(client),
    EmojifyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
