import { Component, OnInit } from '@angular/core';
import { BarcodeScanner } from '@ionic-native/barcode-scanner/ngx';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.page.html',
  styleUrls: ['./notas.page.scss'],
})
export class NotasPage implements OnInit {
  opt={
    allowSlidePrev: false,
    allowSlideNext: false
  };

  constructor(private barcodeScanner: BarcodeScanner, private data:FirebaseService) { }

  ngOnInit() {
  }
  scan(){
    this.barcodeScanner.scan().then(barcodeData => {
      console.log('Barcode data', barcodeData);
      if(!barcodeData.cancelled){
        this.data.guardarRegistros(barcodeData.format, barcodeData.text);
      }
     }).catch(err => {
         console.log('Error', err);
         //this.data.guardarRegistros('QRcode','http://www.halowaypoint.com/es-es');
         this.data.guardarRegistros('QRcode','geo:-3.83261,-78.76076');
     });
  }

}
