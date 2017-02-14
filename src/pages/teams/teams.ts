import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from './../team-home/'

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

  private teams = [
    {id: 1, name: 'CF America'},
    {id: 1, name: 'Santos'},
    {id: 1, name: 'Xolos'}
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  itemTapped($event, team) {
    this.navCtrl.push(TeamHomePage, team);
  }

}
