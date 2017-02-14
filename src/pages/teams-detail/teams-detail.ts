import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the TeamsDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-teams-detail',
  templateUrl: 'teams-detail.html'
})
export class TeamsDetailPage {

  private team: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.team = this.navParams.data;
    console.log('navParams', this.navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamsDetailPage');
  }

}
