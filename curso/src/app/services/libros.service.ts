import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Libro } from '../models/libro';
import { LIBROS } from '../models/libros.data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {
  baseURL: string

  constructor(private http: HttpClient) {
    this.baseURL = environment.urlLibros
   }

  getMock(clave: string): Array<Libro>{
    if(!clave){
      return null
    }
    return LIBROS
  }

  getMockAsync(clave: string): Promise<Array<Libro>> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(LIBROS)
      } , 1000)
    })
  }

  getMockRx(clave: string): Observable<Array<Libro>>{
    if(!clave){
      return null
    }
    return new Observable(
      observer => {
        setTimeout(() => {
          observer.next(LIBROS)
        } , 1000)
      }
    )
  }

  getGoogle(clave: string): Observable<Array<Libro>>{
    if(!clave){
      return null
    }

    return this.http.get(this.baseURL + clave)
    .pipe(
      map((data: any) => {
        return data.items.map(
          item => new Libro(item.id, item.volumeInfo.title, item.volumeInfo.authors, item.volumeInfo.publishedDate)
        )
      })
    )
  }
}
