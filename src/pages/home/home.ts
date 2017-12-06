import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';


import { PetWalk } from '../../commons/petWalk';
import { PetService } from '../../services/pet.service';

import { DetailsPage } from '../details/details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  petWalks:any;
  petWalk:PetWalk;

  constructor(
      public navCtrl: NavController,
      private _ps:PetService,
      private modalController:ModalController
      ) {
    this._ps.getPetWalks()
      .subscribe( data => {
        this.petWalks = data
    });
  }

  getPetWalkById(id):PetWalk{
    let petwalk:PetWalk;
    petwalk = this.petWalks.find(x => x._id === id);
    return petwalk;
  }

   showDetails(id) {
    let petWalk = this.getPetWalkById(id);
    let details = this.modalController.create(DetailsPage, petWalk);
    details.present();
  }


}
