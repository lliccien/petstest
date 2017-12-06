import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { PetWalk } from '../../commons/petWalk';


@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',

})
export class DetailsPage {

  detailsPetWalk:PetWalk;
  coord:any;
  lat:number;
  lng:number;

    constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public viewController:ViewController,

    ) {
      this.detailsPetWalk = this.navParams.data;
      this.coord = this.detailsPetWalk.coordenadas_salida.split(",");
      this.lat = Number(this.coord[0]);
      this.lng = Number(this.coord[1]);

  }

  close() {
    this.viewController.dismiss();
  }
}
