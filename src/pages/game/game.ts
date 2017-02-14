import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { EliteApiService } from '../../app/shared/'
import { TeamHomePage } from './../team-home/';


@Component({
  selector: 'page-game',
  templateUrl: 'game.html'
})
export class GamePage {

  private game: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private eliteApiService: EliteApiService) {
      this.game = this.navParams.data;
    }

  ionViewDidLoad() {
    console.log(this.game);
  }

  private teamTapped(teamId) {
    let tourneyData = this.eliteApiService.getCurrentTorney();
    let team = tourneyData.teams.find(t => t.id == teamId)
    this.navCtrl.push(TeamHomePage, team);
  }

}
