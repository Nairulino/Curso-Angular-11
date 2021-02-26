import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'ind-lista-simple',
  templateUrl: './lista-simple.component.html',
  styleUrls: ['./lista-simple.component.scss']
})
export class ListaSimpleComponent implements OnInit {
  tarea: Tarea
  tareas: Array<Tarea>
  constructor(private storage: StorageService) {
    this.storage.store$.subscribe(
      data => {
        this.tareas = data
      }
    )
   }

  ngOnInit(): void {
    this.tarea = new Tarea()
    this.tareas = this.storage.getTareas()
  }

  onClickAdd(): void {
    if(!this.tarea.titulo){
      return
    }
    this.tareas.push(this.tarea)
    this.tarea = new Tarea()
    this.storage.setTareas(this.tareas)
    console.log(this.tareas)
  }

}
