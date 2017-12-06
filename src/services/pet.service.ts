import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { URL_SERVICES } from '../config/url.services';

/*
  Generated class for the HolamascotaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PetService {

  constructor(public http: HttpClient) {

  }
    getPetWalks() {
      let url = URL_SERVICES + '/paseos/lista';
      return this.http.get(url)
    }

}
