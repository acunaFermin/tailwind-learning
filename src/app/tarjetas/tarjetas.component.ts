import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent{

  cards = [
    {
      icon: 'H',
      category: 'Desarrollo Web',
      description: 'Aprende desarrollo web responsive design'
    },
    {
      icon: '_',
      category: 'Sistemas Operativos',
      description: 'Aprende a administrar sistemas oiperativos'
    },
    {
      icon: 's',
      category: 'Hardware',
      description: 'Conoce todo sobre hardware'
    },
    {
      icon: 'u',
      category: 'Redes e Internet',
      description: 'Configura redes y servidores'
    },
    {
      icon: 'a',
      category: 'Bases de Datos',
      description: 'Aprende cosas de bases de datos'
    },
  ]
}
