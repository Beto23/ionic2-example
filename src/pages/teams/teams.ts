import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamsDetailPage } from './../teams-detail/'

/*
  Generated class for the Teams page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})
export class TeamsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  itemTapped() {
    this.navCtrl.push(TeamsDetailPage);
  }

}
