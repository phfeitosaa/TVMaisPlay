import { SlideHomeProvider } from './../../providers/slide-home/slide-home';
import { ProgramacaoPage } from './../programacao/programacao';
import { ProgramasPage } from './../programas/programas';
import { SlideProgramasProvider } from './../../providers/slide-programas/slide-programas';
import { AoVivoPage } from './../ao-vivo/ao-vivo';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  slidesHome;
  slidesProgramas;

  constructor(public navCtrl: NavController, private slideHomeProvider: SlideHomeProvider, private slideProgramasProvider: SlideProgramasProvider) {
    this.slideProgramasProvider.GetSlideProgramas().subscribe(data => {
      console.log(data);
      this.slidesProgramas = data;
    })

    this.slideHomeProvider.GetSlideHome().subscribe(data => {
      console.log(data);
      this.slidesHome = data;
    })
  }

  GoToAoVivoPage(){
    this.navCtrl.push(AoVivoPage)
  }

  GoToProgramasPage(){
    this.navCtrl.push(ProgramasPage)
  }

  GoToProgramacaoPage(){
    this.navCtrl.push(ProgramacaoPage)
  }

}
