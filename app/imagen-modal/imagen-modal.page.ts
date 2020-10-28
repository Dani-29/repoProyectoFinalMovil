import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IonSlides, LoadingController, ModalController, NavParams } from '@ionic/angular';
import { $ } from 'protractor';

@Component({
  selector: 'app-imagen-modal',
  templateUrl: './imagen-modal.page.html',
  styleUrls: ['./imagen-modal.page.scss'],
})
export class ImagenModalPage implements OnInit {

  indice: number;
  options = {
    pager : true,
    zoom : {
      maxRatio : 8
    }
    
  }
  @ViewChild('slides') slides : IonSlides;

  @ViewChild('slides', {read : ElementRef}) slide: ElementRef;

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

  constructor(private modalCtrl : ModalController, private navparams : NavParams, private loadingController: LoadingController) {

    this.loadingController.create({
      message: 'Cargando Imagen',
      duration: 1000
    }).then(loading => loading.present())

    this.indice = this.navparams.get('index');
    console.log(this.indice);
       
  }
  ngOnInit() {
    console.log(this.slide);
    /*this.slides.slideTo(this.indice, 0).then(res => {
      this.loadingController.dismiss()
    });*/
    
  }
  cerrarModal(){
    this.modalCtrl.dismiss();
  }
  zoom(zoom:boolean){
    if(zoom){
      this.slide.nativeElement.swiper.zoom.in()
    }
    else{
      this.slide.nativeElement.swiper.zoom.out()
    }
  }

}
