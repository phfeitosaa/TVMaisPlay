import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProgramacaoProvider } from './../../providers/programacao/programacao';

@Component({
  selector: 'page-programacao',
  templateUrl: 'programacao.html'
})
export class ProgramacaoPage {

  d = new Date;
  programacao_segment = this.d.getDay().toString();

  programacao_dom;
  programacao_seg;
  programacao_ter;
  programacao_qua;
  programacao_qui;
  programacao_sex;
  programacao_sab;

  constructor(public navCtrl: NavController, private programacaoProvider: ProgramacaoProvider) {

    switch(this.programacao_segment)
    {
      case '0':
        this.programacaoProvider.getProgramacaoDom().subscribe(data => {
          console.log(data);
          this.programacao_dom = data;
        })
        break;
      
      case '1':
        this.programacaoProvider.getProgramacaoSeg().subscribe(data => {
          console.log(data);
          this.programacao_seg = data;
        })
        break;
      
      case '2':
        this.programacaoProvider.getProgramacaoTer().subscribe(data => {
          console.log(data);
          this.programacao_ter = data;
        })
        break;

      case '3':
        this.programacaoProvider.getProgramacaoQua().subscribe(data => {
          console.log(data);
          this.programacao_qua = data;
        })
        break;

      case '4':
        this.programacaoProvider.getProgramacaoQui().subscribe(data => {
          console.log(data);
          this.programacao_qui = data;
        })
        break;

      case '5':
        this.programacaoProvider.getProgramacaoSex().subscribe(data => {
          console.log(data);
          this.programacao_sex = data;
        })
        break;

      case '6':
        this.programacaoProvider.getProgramacaoSab().subscribe(data => {
          console.log(data);
          this.programacao_sab = data;
        })
        break;
    }
  }

  LoadProgDom(){
    this.programacaoProvider.getProgramacaoDom().subscribe(data => {
      console.log(data);
      this.programacao_dom = data;
    })
  }

  LoadProgSeg(){
    this.programacaoProvider.getProgramacaoSeg().subscribe(data => {
      console.log(data);
      this.programacao_seg = data;
    })
  }

  LoadProgTer(){
    this.programacaoProvider.getProgramacaoTer().subscribe(data => {
      console.log(data);
      this.programacao_ter = data;
    })
  }

  LoadProgQua(){
    this.programacaoProvider.getProgramacaoQua().subscribe(data => {
      console.log(data);
      this.programacao_qua = data;
    })
  }

  LoadProgQui(){
    this.programacaoProvider.getProgramacaoQui().subscribe(data => {
      console.log(data);
      this.programacao_qui = data;
    })
  }
  
  LoadProgSex(){
    this.programacaoProvider.getProgramacaoSex().subscribe(data => {
      console.log(data);
      this.programacao_sex = data;
    })
  }

  LoadProgSab(){
    this.programacaoProvider.getProgramacaoSab().subscribe(data => {
      console.log(data);
      this.programacao_sab = data;
    })
  }

}
