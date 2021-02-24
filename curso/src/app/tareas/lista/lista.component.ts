import { Component, OnInit } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'ind-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  tareas: Array<Tarea>
  store: string

  constructor() { }

  ngOnInit(): void {
    this.store = 'tareas'
    this.tareas = localStorage.getItem(this.store) ? JSON.parse(localStorage.getItem(this.store)) : []
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
    localStorage.setItem(this.store, JSON.stringify(this.tareas))
  }
}
