import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../services/usuarios.service';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoginPageModule } from './login.module';
import { LoginPageRoutingModule } from './login-routing.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;
  constructor(private usuarios: UsuariosService, private ruta: Router, public alerta: AlertController) { }

  ngOnInit() {
  }
  onSubmitLogin(){
    console.log('ESTAS EN LA funcion');
    this.usuarios.login(this.email, this.password).then(res => {
      this.ruta.navigate(['/inbox']);
    }).catch(err => this.presentAlert())
  }
  async presentAlert() {
    const alert = await this.alerta.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      message: 'Los datos son incorrectos',
      buttons: ['Aceptar']
    });
    await alert.present();
  }
  regresar(){
    this.ruta.navigate(['/principal']);
  }

}
