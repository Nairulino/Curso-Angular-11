import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TareasRoutingModule } from './tareas-routing.module';
import { TareasComponent } from './tareas.component';
import { ListaSimpleComponent } from './lista-simple/lista-simple.component';
import { ListaComponent } from './lista/lista.component';
import { FormsModule } from '@angular/forms';
import { TareaComponent } from './tarea/tarea.component';
import { NuevaComponent } from './nueva/nueva.component';


@NgModule({
  declarations: [TareasComponent, ListaSimpleComponent, ListaComponent, TareaComponent, NuevaComponent],
  imports: [
    CommonModule,
    FormsModule,
    TareasRoutingModule
  ]
})
export class TareasModule { }
