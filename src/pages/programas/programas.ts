import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProgramasProvider } from '../../providers/programas/programas';

@Component({
  selector: 'page-programas',
  templateUrl: 'programas.html'
})
export class ProgramasPage {

  programas;

  constructor(public navCtrl: NavController, private programasProvider: ProgramasProvider) {
    this.programasProvider.GetProgramas().subscribe(data => {
      console.log(data);
      this.programas = data;
    });
  }
  
}
