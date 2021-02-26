import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'ind-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  tareas: Array<Tarea>
  // store: string

  constructor(private storage: StorageService) {
    this.storage.store$.subscribe(
      data => {
        this.tareas = data
      }
    )
   }

  ngOnInit(): void {
    // this.store = 'tareas'
    this.tareas = this.storage.getTareas()
    // this.tareas = localStorage.getItem(this.store) ? JSON.parse(localStorage.getItem(this.store)) : []
  }

  addTarea(ev: Tarea): void {
    this.tareas.push(ev)
    this.save()
  }

  onUpdate(ev: number): void {
    this.tareas[ev].isCompleted = !this.tareas[ev].isCompleted
    this.save()
  }

  onDelete(ev: number): void{
    this.tareas.splice(ev, 1)
    this.save()
  }

  private save() {
    this.storage.setTareas(this.tareas)
    // localStorage.setItem(this.store, JSON.stringify(this.tareas))
  }
}
