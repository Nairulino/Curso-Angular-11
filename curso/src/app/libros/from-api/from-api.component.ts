import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Libro } from 'src/app/models/libro';
import { ApilibrosService } from 'src/app/services/apilibros.service';

@Component({
  selector: 'ind-from-api',
  templateUrl: './from-api.component.html',
  styleUrls: ['./from-api.component.scss']
})
export class FromApiComponent implements OnInit {
  libros: Array<Libro>
  add: boolean
  edit: boolean
  title: string
  form: FormGroup

  constructor(private api: ApilibrosService, private fb) { }

  ngOnInit(): void {
    this.add = false
    this.edit = false

    this.api.getAll().subscribe(
      data => this.libros = data
    )
  }

  startAddEdit(valor: string): void{
    if(valor =='edit'){
      this.edit = true
      this.add = false
      this.title = 'Editar libro'
      libro = new 
    }
  }
  

}
