import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
})
export class PrincipalPage implements OnInit {

  header:"Formulario";
  txtusuario: string;
  txtclave: string;
  darkMode: boolean = true;
  constructor(private alert: AlertController, private ruta: Router) { 
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    this.darkMode = prefersDark.matches;
  }

  ngOnInit() {
    //this.MensajeForm();
  }
  slider=[
    {
      image:'assets/imagenes/icon.png',
      img:'assets/imagenes/2nuevo.png'
    }
  ];
  async MensajeNormal(texto:string) {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: this.header,
      message: texto,
      buttons: ['OK']
    });

    await alert.present();
  }
  async MensajeConfirmacion() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: this.header,
      message: 'Desea Eliminar!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            console.log('Eliminado');
            this.MensajeNormal('Elimnado');
          }
        }
      ]
    });

    await alert.present();
  }
  async MensajeForm() {
    const alert = await this.alert.create({
      cssClass: 'my-custom-class',
      header: this.header,
      backdropDismiss: false,
      subHeader: 'Inicio de Sesion',
      inputs: [
        {
          name: 'txtusuario',
          type: 'email',
          placeholder: 'Escriba su usuario'
        },
        {
          name: 'txtclave',
          type: 'password',
          placeholder: 'Escriba su clave'
        },
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
            //this.ruta.navigate(['/inicio']);
          }
        }, {
          text: 'Ingresar',
          handler: (data) => {
            console.log(data);
            this.txtusuario=data.txtusuario;
            this.txtclave=data.txtclave;
            this.Validar();
          }
        }
      ]
    });
    await alert.present();
  }
  Validar(){
    if(this.txtclave=='daniela' && this.txtusuario=='daniela@gmail.com'){
      this.MensajeNormal('Bienvenida '+this.txtusuario);
      this.ruta.navigate(['/inbox']);
    }else{
      this.MensajeForm();
      this.MensajeNormal('Usuario Incorrecto');
      
    }
  }
  Login(){
    this.ruta.navigate(['/login']);
  }
  cambioColor(){

    this.darkMode = !this.darkMode;
    document.body.classList.toggle( 'dark' );
  }
}

