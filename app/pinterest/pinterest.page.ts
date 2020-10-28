import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ImagenModalPage } from '../imagen-modal/imagen-modal.page';

@Component({
  selector: 'app-pinterest',
  templateUrl: './pinterest.page.html',
  styleUrls: ['./pinterest.page.scss'],
})
export class PinterestPage implements OnInit {
  constructor(private modalCtrl: ModalController, private ruta: Router) { }

  ngOnInit() {
  }
  imagenes=[
    'pin1.jpg',
    'pin2.jpg',
    'pin3.jpg',
    'pin4.jpg',
    'pin5.jpg',
    'pin6.jpg',
    'pin7.jpg',
    'pin8.jpg',
  ];
  verImagen(index){
    this.modalCtrl.create({
      component: ImagenModalPage,
      componentProps :{
        index : index
      }
    }).then(modal => modal.present())
  }
  regresar(){
    this.ruta.navigate(['/inbox']);
  }


}
