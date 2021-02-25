import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CursosRoutingModule } from './cursos-routing.module';
import { CursosComponent } from './cursos.component';
import { FormMdComponent } from './form-md/form-md.component';
import { FormTdComponent } from './form-td/form-td.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CursosComponent, FormMdComponent, FormTdComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CursosRoutingModule
  ]
})
export class CursosModule { }
