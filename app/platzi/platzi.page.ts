import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-platzi',
  templateUrl: './platzi.page.html',
  styleUrls: ['./platzi.page.scss'],
})
export class PlatziPage implements OnInit {

  slides = [
    {
      img: 'assets/imagenes/sl1.png',
      titulo: 'Visible <br> 3 weeks'
    },
    {
      img: 'assets/imagenes/sl2.png',
      titulo: 'Visible <br> 3 weeks'
    },
    {
      img: 'assets/imagenes/sl3.png',
      titulo: 'Visible <br> 3 weeks'
    },
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }
  regresar(){
    this.router.navigate(['/inbox'])
  }

}
