import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StandingsPage } from './../standings/';
import { TeamsDetailPage } from './../teams-detail/'
import { MyTeamsPage } from './../my-teams/'

/*
  Generated class for the TeamHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html'
})
export class TeamHomePage {

  private standingsPage: any;
  private teamsDetailPage: any;
  private team: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.standingsPage = StandingsPage;
    this.teamsDetailPage = TeamsDetailPage;
    this.team = this.navParams.data;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }

  private goHome() {
    this.navCtrl.popToRoot();
  }

}
