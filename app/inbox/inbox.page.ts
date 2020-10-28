import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { UsuariosService } from '../services/usuarios.service';


@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {
  lista:string[];
  items: any;
  id: string;
  constructor(private ruta: Router, public authService: UsuariosService) {
    //this.inicializarItems();
    //this.inicializar();Hemos encontrado nuevos tableros
   }

  ngOnInit() {
  }
  correos=[
    {
      titulo: 'Google',
      subtitulo:'Ayudar a reforzar la seguridad de tu cuenta de Google',
      descripcion:'Todavia quiere que foreveralone2905_2000@hotmail.com sea tu direccion de correo electronico de recuperacion?', 
      avatar: 'assets/imagenes/g.png',
      correo: 'no-reply@ccounts.google.com'
    },
    {
      titulo: 'Notar from Elementor',
      subtitulo:'[Meetup] Learning and sharing Elementor - SEO',
      descripcion:'Elementor Silicon Valley Online Meetup', 
      avatar: 'assets/imagenes/n.png',
      correo: 'meetup@elementor.com'
    },
    {
      titulo: 'Spotify',
      subtitulo:'Ulimos dias para probar 3 meses gratis de Spotify Premium y disfrutar de un monton de ventajas',
      descripcion:'Spotify Premium !Ultimos dias! 3 meses gratis para escuchar lo que te importa', 
      avatar: 'assets/imagenes/s.png',
      correo: 'no-reply@spotify.com'
    },
    {
      titulo: 'Monica',
      subtitulo:'!Este miercoles tienes cita con un nuevo Webinar!',
      descripcion:'Contaremos con la precencia de nuestra Responsable de Formacion', 
      avatar: 'assets/imagenes/m.png',
      correo: 'noreply@genial.ly'
    }
  ];
  inicializarItems(){
    this.items=this.correos;
  }
  inicializar(){
    this.lista=[
      'daniela@gmail.com',
      'sofia12@hotmail.es',
      'leylajaramillo@.com'
    ];
  }
  buscar(ev: any){
    this.inicializarItems();
    const val = ev.target.value;
    if(val && val.trim() != '') {
      this.correos=this.correos.filter((item) => {
        return (item.correo.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }
  ruta1(){
    this.ruta.navigate(['/pinterest']);
  }
  ruta2(){
    this.ruta.navigate(['/platzi']);
  }
  salir(){
    this.authService.salir();
  }
}
