import { HomePage } from './../pages/home/home';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Icon } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AoVivoPage } from '../pages/ao-vivo/ao-vivo';
import { SobrePage } from '../pages/sobre/sobre';
import { ProgramasPage } from '../pages/programas/programas';
import { ProgramacaoPage } from '../pages/programacao/programacao';
import { ContatoPage } from '../pages/contato/contato';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, icon: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Início', icon: 'home', component: HomePage },
      { title: 'Ao vivo', icon: 'play', component: AoVivoPage },
      { title: 'Sobre', icon: 'information-circle', component: SobrePage },
      { title: 'Programas', icon: 'images', component: ProgramasPage },
      { title: 'Programação', icon: 'list-box', component: ProgramacaoPage },
      { title: 'Contato', icon: 'contact', component: ContatoPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
