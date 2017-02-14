import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import {
  GamePage,
  TeamsPage,
  TournamentsPage,
  TeamsDetailPage,
  MyTeamsPage
} from '../pages/pages';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = MyTeamsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, private menu: MenuController) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    // this.pages = [
    //   { title: 'Page One', component: Page1 },
    //   { title: 'Page Two', component: Page2 }
    // ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleBlackTranslucent();
      Splashscreen.hide();
    });
  }

  goHome() {
    this.nav.push(MyTeamsPage)
    this.menu.close();
  }

  goTournaments() {
    this.nav.push(TournamentsPage)
    this.menu.close();
  }
}
