import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  listaContactos: Contactos[] =[
    {
      foto: 'icon1.png',
      nombre: 'Wilson Tacuri',
      celular: '+593967986312'
    },
    {
      foto: 'icon3.png',
      nombre: 'Luis Soto',
      celular: '+593980356556'
    },
    {
      foto: 'icon4.png',
      nombre: 'Anshy Sarmiento',
      celular: '+593993062454'
    },
    {
      foto: 'icon6.png',
      nombre: 'Sindy Cuenca',
      celular: '+593992123727'
    }
  ];
  listB: Contactos[]=[
    {
      foto: 'icon6.png',
      nombre: 'Glenda Jaya',
      celular: '+593988782805'
    },
    {
      foto: 'icon5.png',
      nombre: 'Edwin',
      celular: '+593997530165'
    },
    {
      foto: 'icon2.png',
      nombre: 'Jose Zhunaula',
      celular: '+593 96 809 1224'
    },
  ]
  listC: Contactos[]=[
    {
      foto: 'icon7.png',
      nombre: 'Miguel Sarmiento',
      celular: '+593980895703'
    },
    {
      foto: 'icon8.png',
      nombre: 'Camila Montaner',
      celular: '0900112547'
    },
    {
      foto: 'icon9.png',
      nombre: 'Carmita Betancurt',
      celular: '0903352148'
    },
  ]

  constructor() { }


  ngOnInit() {
  }

}
interface Contactos{
  foto: string;
  nombre: string;
  celular: string;
}
