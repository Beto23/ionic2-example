import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { TeamsPage } from './../teams'
import { EliteApiService } from './../../app/shared/'

@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  private tournaments;

  constructor(
    public navCtrl: NavController,
    public loadingController: LoadingController,
    private eliteApiService: EliteApiService) {}

  private itemTapped($event, tourney) {
    this.navCtrl.push(TeamsPage, tourney);
  }

  private ionViewDidLoad(): void {
    let loader = this.loadingController.create({
      content: 'Getting tournamens',
      spinner: 'dots'
    })
    loader.present().then(() => {
      this.eliteApiService.getTournaments()
        .subscribe(
          data => {
          this.tournaments = data;
          loader.dismiss();
          },
          error => {
            console.log(error, 'error');
            loader.dismiss();
          }
        )
    })
  }

}
