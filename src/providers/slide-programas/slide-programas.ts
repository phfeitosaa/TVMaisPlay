import { enviroment } from './../../theme/enviroment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SlideProgramasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SlideProgramasProvider {

  api_url = enviroment.site_url+enviroment.slideProg_url;

  constructor(public http: HttpClient) {
    console.log('Hello SlideProgramasProvider Provider');
  }

  GetSlideProgramas(){
    return this.http.get(this.api_url);
  }

}
