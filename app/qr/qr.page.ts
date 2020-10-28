import { Component, OnInit } from '@angular/core';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  public textToCode: string;
  public myAngularxQrCode: string = null;
  public showCamera = false;
  public textScanned: string = '';
  constructor(private qrScanner: QRScanner, private iab: InAppBrowser, public alertControl: AlertController) { }

  ngOnInit() {
  }
  openLink(link: any) {
    const browser = this.iab.create(link, '_system', 'location=yes');
  }
  createQRCode() {
    this.myAngularxQrCode = this.textToCode;
    this.textToCode = "";
  }
  scancode() {
    this.showCamera = true;
    this.qrScanner.prepare()
    .then((status: QRScannerStatus) => {
       if (status.authorized) {

        console.log('Escaneo en curso....' + JSON.stringify(status));
        
         const scanSub = this.qrScanner.scan().subscribe((text: any) => {
           console.log('Escaneando', text);
           this.textScanned = text.result;
           this.qrScanner.hide(); 
           scanSub.unsubscribe();
           this.showCamera = false;
         });
  
       } else if (status.denied) {
        
       } else {
       
       }
    })
    .catch((e: any) => console.log('Error es', e));
  }
  closeCamera() {
    this.showCamera = false;
    this.qrScanner.hide();
    this.qrScanner.destroy();
  }

}
