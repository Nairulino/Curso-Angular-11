import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { environment } from 'src/environments/environment';
import { LibrosService } from 'src/app/services/libros.service';

@Component({
  selector: 'ind-byservice',
  templateUrl: './byservice.component.html',
  styleUrls: ['./byservice.component.scss']
})
export class ByserviceComponent implements OnInit {
  urlBase: string
  clave: string
  libros: Array<Libro>
  error: string
  constructor(private lbs: LibrosService) { }

  ngOnInit(): void {
    this.urlBase = environment.urlLibros
    this.clave = this.clave
    this.libros = []
  }

  onBuscar(): void {
    if (!this.clave) {
      return null
    }
    this.lbs.getGoogle(this.clave)

      .subscribe(
        data => this.libros = data,
        (error) => { // En caso de error
          this.error = error
          console.log('No se han encontrado resultados.')
        })

    this.clave = ''
  }

}
