import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { EliteApiService } from './shared/'
import { MyApp } from './app.component';

import {
  GamePage,
  TeamsPage,
  TournamentsPage,
  TeamsDetailPage,
  MyTeamsPage,
  StandingsPage,
  TeamHomePage
} from '../pages/pages';

@NgModule({
  declarations: [
    MyApp,
    GamePage,
    TeamsPage,
    TournamentsPage,
    TeamsDetailPage,
    MyTeamsPage,
    StandingsPage,
    TeamHomePage
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
    MyTeamsPage,
    StandingsPage,
    TeamHomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, EliteApiService]
})
export class AppModule {}
