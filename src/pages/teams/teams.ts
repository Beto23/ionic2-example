import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from './../team-home/'
import { EliteApiService } from './../../app/shared/'

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

  private teams = [];

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private eliteApiService: EliteApiService) {}

  private ionViewDidLoad() {
    let selectedTorney = this.navParams.data;
    this.eliteApiService.getTournamentsData(selectedTorney.id)
      .subscribe(
        data => {
          this.teams = data.teams;
        }
      )
  }

  itemTapped($event, team) {
    this.navCtrl.push(TeamHomePage, team);
  }

}
