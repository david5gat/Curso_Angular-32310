import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viajes',
  templateUrl: './viajes.component.html',
  styleUrls: ['./viajes.component.css']
})
export class ViajesComponent implements OnInit {

  Imgs_Bogota = ['.../assets/imagenes_viajes/Bogota/146.jpg','../imagenes_viajes/Bogota/download.jpg','../imagenes_viajes/Bogota/Emprendimientos-en-Bogotá.jpg','../imagenes_viajes/Bogota/que-ver-bogota.jpg','../imagenes_viajes/Bogota/que-ver-en-bogota.jpg','../imagenes_viajes/Bogota/vertic_880_0.jpg']

  Imgs_Medellin = ['../imagenes_viajes/Medellin/99.jpg','../imagenes_viajes/Medellin/11935610264_d47654ddd7_k-1.jpg','../imagenes_viajes/Medellin/Comuna_13,_Medellín_07.jpg','../imagenes_viajes/Medellin/comuna-13-escaleeras-lectricas.jpg','../imagenes_viajes/Medellin/Medellín_FB.png','../imagenes_viajes/Medellin/Medellin-Transformacion-2-5.jpg','../imagenes_viajes/Medellin/que-hacer-medellin-1.jpg']

  Imgs_Melgar = ['../imagenes_viajes/Melgar/119823515.jpg','../imagenes_viajes/Melgar/bongaloo.jpg','../imagenes_viajes/Melgar/home_gallery-1-1200x900.jpg','../imagenes_viajes/Melgar/melgar_0.jpg','../imagenes_viajes/Melgar/Piscilago-Turismo-Melgar.jpg']

  Imgs_Sanandres = ['../imagenes_viajes/San_andres/417962_142629_1.jpg','../imagenes_viajes/San_andres/EumL2ujXMAAKErt.jpg','../imagenes_viajes/San_andres/GRKNJYYFFFHOBIPGDZKFFCCIBQ.jpg','../imagenes_viajes/San_andres/SAN-ANDRES-3-1280x640-1024x512.jpg']
   

  constructor() { }

  ngOnInit(): void {
    
  }

  obtenerImg () {


    let Bogota_Crp = './imagenes_viajes/Bogota';
   
    let Medellin_Crp = '';

    let Melgar_Crp = '';

    let Sanandres_Crp = ';'

    

    let imagenes = './imagenes_viajes/Bogota'

    console.log(imagenes);
    

  }
  

}
