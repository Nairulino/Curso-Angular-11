import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ind-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.scss']
})
export class SaludoComponent implements OnInit {
  nombre: string
  mensaje: string

  constructor() { }

  ngOnInit(): void {
    this.mensaje = 'Dime tu nombre'
    this.nombre = 'Pepe'
  }

  onClickBorrar(ev: Event): void {
    console.log(ev)
    this.nombre = ''
  }

}
