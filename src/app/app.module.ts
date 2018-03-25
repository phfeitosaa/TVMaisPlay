import { HomePage } from './../pages/home/home';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { AoVivoPage } from '../pages/ao-vivo/ao-vivo';
import { SobrePage } from '../pages/sobre/sobre';
import { ProgramasPage } from '../pages/programas/programas';
import { ProgramacaoPage } from '../pages/programacao/programacao';
import { ContatoPage } from '../pages/contato/contato';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { ProgramasProvider } from '../providers/programas/programas';
import { HttpClientModule } from '@angular/common/http';
import { ProgramacaoProvider } from '../providers/programacao/programacao';
import { SlideProgramasProvider } from '../providers/slide-programas/slide-programas';
import { SlideHomeProvider } from '../providers/slide-home/slide-home';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    AoVivoPage,
    SobrePage,
    ProgramasPage,
    ProgramacaoPage,
    ContatoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    AoVivoPage,
    SobrePage,
    ProgramasPage,
    ProgramacaoPage,
    ContatoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    ProgramasProvider,
    ProgramacaoProvider,
    SlideProgramasProvider,
    SlideHomeProvider
  ]
})
export class AppModule {}
