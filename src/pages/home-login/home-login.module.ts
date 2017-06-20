import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomeLoginPage } from './home-login';

@NgModule({
  declarations: [
    HomeLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(HomeLoginPage),
  ],
  exports: [
    HomeLoginPage
  ]
})
export class HomeLoginPageModule {}
