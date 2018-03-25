import { enviroment } from './../../theme/enviroment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the SlideHomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SlideHomeProvider {

  api_url = enviroment.site_url+enviroment.slideHome_url;

  constructor(public http: HttpClient) {
    console.log('Hello SlideHomeProvider Provider');
  }

  GetSlideHome(){
    return this.http.get(this.api_url);
  }

}
