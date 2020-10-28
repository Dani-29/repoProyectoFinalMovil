
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private Afauth: AngularFireAuth, private ruta: Router) { }

  login(email: string, password:string){

    return new Promise((resolve, rejected) => {
      this.Afauth.signInWithEmailAndPassword(email, password).then(res => {
        resolve(res);
      }).catch(err => rejected(err));
    });
  }

  salir(){
    this.Afauth.signOut().then(() => {
      this.ruta.navigate(['/login']);
    });
  }
}
