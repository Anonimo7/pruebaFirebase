import { AngularFireAuth } from 'angularfire2/auth';
import { HomeLoginPage } from './../home-login/home-login';

import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { errorObject } from 'rxjs/util/errorObject';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  contrasena : string= "";
  usuario: string =  "";
  error: boolean;
  constructor(public navCtrl: NavController, public firebaseAuth : AngularFireAuth) {
    
  }

  login(){
    this.firebaseAuth.auth.signInWithEmailAndPassword(this.usuario, this.contrasena).then(resultado => {
      this.error = false;
      this.navCtrl.push(HomeLoginPage);
      console.log(resultado)
    }).catch(error => {
      this.error = true;
      console.log("error")
    })
  }

}
