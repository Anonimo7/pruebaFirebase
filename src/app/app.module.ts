import { HomeLoginPage } from './../pages/home-login/home-login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireAuth} from 'angularfire2/auth';
import { AngularFireModule} from 'angularfire2'
import { AuthProvider } from '../providers/auth/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyBIcAvapgx7v8Wd28WRs_WEJDT9YR_pR_s",
    authDomain: "pruebafirebase-6ff69.firebaseapp.com",
    databaseURL: "https://pruebafirebase-6ff69.firebaseio.com",
    projectId: "pruebafirebase-6ff69",
    storageBucket: "pruebafirebase-6ff69.appspot.com",
    messagingSenderId: "743047225494"  
}
 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HomeLoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HomeLoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AngularFireAuth
  ]
})
export class AppModule {}
