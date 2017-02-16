import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { TournamentsPage } from './../tournaments'
import { TeamHomePage } from './../team-home/'
import { EliteApiService } from './../../app/shared/'

/*
  Generated class for the MyTeams page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html'
})
export class MyTeamsPage {

  private favorites = [
    {
      team: { id: 6182, name: 'HC Elite 7th', coach: 'Michelotti'},
      tournamentId: '89e13aa2-ba6d-4f55-9cc2-61eba6172c63',
      tournamentName: 'March Madness Tournament'
    },
    {
      team: { id: 805, name: 'HC Elite', coach: 'Michelotti'},
      tournamentId: '98c6857e-b0d1-4295-b89e-2d95a45437f2',
      tournamentName: 'Holiday Hopps Challenge'
    }
  ];

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private loading: LoadingController,
    private eliteApiService: EliteApiService) {}

  private goToTournamets() {
    this.navCtrl.push(
      TournamentsPage
    )
  }

  favoriteTapped($event, favorite): void {
    let loader = this.loading.create({
      content: 'Getting data',
      dismissOnPageChange: true
    });
    loader.present();
    this.eliteApiService.getTournamentsData(favorite.tournamentId)
      .subscribe( t => this.navCtrl.push(TeamHomePage, favorite.team));
  }

}
