import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'ind-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.scss']
})
export class ListaSimpleComponent implements OnInit {
  tarea: Tarea
  tareas: Array<Tarea>
  constructor() { }

  ngOnInit(): void {
    this.tarea = new Tarea()
    this.tareas = []
  }

  onClickAdd(): void {
    if(!this.tarea.titulo){
      return
    }
    this.tareas.push(this.tarea)
    this.tarea = new Tarea()
    console.log(this.tareas)
  }

}
