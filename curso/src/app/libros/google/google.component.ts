import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Libro } from 'src/app/models/libro';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'ind-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.scss']
})
export class GoogleComponent implements OnInit {
  urlBase: string
  clave: string
  libros: Array<Libro>
  datos$: Observable<Libro>
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.urlBase = environment.urlLibros
    this.clave = this.clave
    this.libros = []
  }

  onBuscar(): void {
    if(!this.clave){
      return null
    }

    this.datos$ = this.http.get(this.urlBase + this.clave)
    .pipe(
      map((data: any) => {
        return data.items.map(
          item => new Libro(item.id, item.volumeInfo.title, item.volumeInfo.authors, item.volumeInfo.publishedDate)
        )
      })
    )

    this.clave = ''
    this.datos$.subscribe(
      (data: any) => {
        console.log(data)
        this.libros = data
      })
  }

}
