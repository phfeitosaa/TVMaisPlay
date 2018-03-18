import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../theme/enviroment';

/*
  Generated class for the ProgramasProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProgramasProvider {

  api_url = enviroment.site_url+enviroment.programas_url;

  constructor(public http: HttpClient) {
    console.log('Hello ProgramasProvider Provider');
  }

  GetProgramas(){
    return this.http.get(this.api_url);
  }

}
