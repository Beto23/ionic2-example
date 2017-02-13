import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import {
  GamePage,
  TeamsPage,
  TournamentsPage,
  TeamsDetailPage,
  MyTeamsPage
} from '../pages/pages';

@NgModule({
  declarations: [
    MyApp,
    GamePage,
    TeamsPage,
    TournamentsPage,
    TeamsDetailPage,
    MyTeamsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GamePage,
    TeamsPage,
    TournamentsPage,
    TeamsDetailPage,
    MyTeamsPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
