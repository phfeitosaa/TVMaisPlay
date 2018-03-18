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

  slidesProgramas;

  constructor(public navCtrl: NavController, private slideProgramasProvider: SlideProgramasProvider) {
    this.slideProgramasProvider.GetSlideProgramas().subscribe(data => {
      console.log(data);
      this.slidesProgramas = data;
    })
  }

  GoToAoVivoPage(){
    this.navCtrl.push(AoVivoPage)
  }

  GoToProgramasPage(){
    this.navCtrl.push(ProgramasPage)
  }

}
