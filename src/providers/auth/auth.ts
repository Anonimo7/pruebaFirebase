import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import 'rxjs/add/operator/map';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthProvider {

  constructor(public firebaseAuth: AngularFireAuth) {
    console.log('Hello AuthProvider Provider');
  }

  login(contrasena: string) {
    // console.log(contrasena)
    // this.firebaseAuth.auth.signInWithEmailAndPassword('dany_prueba@gmail.com', contrasena).then(resultado => {
    //   console.log(resultado)
    //   console.log(resultado.uid)
    //   console.log(resultado.code)
    //   console.log(JSON.stringify(resultado))
    // }).catch(error => {
    //   console.log("vamossss")
    //   console.log(error)
    // })

    var promise = new Promise((resolve, reject) => {
      this.firebaseAuth.auth.signInWithEmailAndPassword('dany_prueba@gmail.com', contrasena).then(() => {
        resolve(true);
      }).catch(error => {
        
        console.log("entro por aqui")
        console.log(error)
        reject(error)
      })
    })

    return promise;
  }
}
