import { Injectable } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { NavController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Registro } from '../Modelos/registro.model';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  arrayGuardados: Registro[]=[];

  constructor(private storage: Storage, private iab:InAppBrowser,private navCtrl: NavController) {
  }
  async cargarStorage(){
    this.arrayGuardados=(await this.storage.get('registros')) || [];
  }
  async guardarRegistros(format:string, texto:string){
    await this.cargarStorage();
    const nuevoRegistro=new Registro(format, texto);
    this.arrayGuardados.unshift(nuevoRegistro);

    //setRegistros
    this.storage.set('registros', this.arrayGuardados);
    //this.abrirRegistro(nuevoRegistro);
  }
  /*abrirRegistro(registro: Registro){
    this.navCtrl.navigateForward('/tabs/tab2');
    switch(registro.tipo){
      case 'http':
        this.iab.create(registro.texto, '_system');
        break;
      case 'geo':
        this.navCtrl.navigateForward(`/tabs/tab2/mapa/${registro.texto}`);
        break;
    }
  }*/
}
