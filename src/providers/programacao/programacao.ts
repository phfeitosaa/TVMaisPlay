import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from '../../theme/enviroment';

/*
  Generated class for the ProgramacaoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProgramacaoProvider {

  api_url_dom = enviroment.site_url+enviroment.programacao_dom_url
  api_url_seg = enviroment.site_url+enviroment.programacao_seg_url
  api_url_ter = enviroment.site_url+enviroment.programacao_ter_url
  api_url_qua = enviroment.site_url+enviroment.programacao_qua_url
  api_url_qui = enviroment.site_url+enviroment.programacao_qui_url
  api_url_sex = enviroment.site_url+enviroment.programacao_sex_url
  api_url_sab = enviroment.site_url+enviroment.programacao_sab_url
  
  constructor(public http: HttpClient) {
  }

  getProgramacaoDom(){
    return this.http.get(this.api_url_dom);
  }

  getProgramacaoSeg(){
    return this.http.get(this.api_url_seg);
  }

  getProgramacaoTer(){
    return this.http.get(this.api_url_ter);
  }

  getProgramacaoQua(){
    return this.http.get(this.api_url_qua);
  }

  getProgramacaoQui(){
    return this.http.get(this.api_url_qui);
  }

  getProgramacaoSex(){
    return this.http.get(this.api_url_sex);
  }

  getProgramacaoSab(){
    return this.http.get(this.api_url_sab);
  }

}
