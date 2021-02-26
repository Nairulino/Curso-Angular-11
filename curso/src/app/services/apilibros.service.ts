import { HttpClient } from '@angular/common/http';
import { identifierModuleUrl } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Libro } from '../models/libro';

/**
 * Operaciones sobre un API REST
 * 
 * Create - POST -> no equipotente
 * Read - GET -> equipotente
 * Update - PUT/PATH -> no equipotente
 * Delete - DELETE -> no equipotente
 * 
 */

@Injectable({
  providedIn: 'root'
})
export class ApilibrosService {
  urlBase: string

  constructor(private http: HttpClient) { 
    this.urlBase = environment.urlApiLibros
  }
  
  getAll(): Observable<Array<Libro>> {
    return this.http.get(this.urlBase) as Observable<Array<Libro>>
  }

  get(id: number): Observable<Libro> {
    return this.http.get(this.urlBase + id) as Observable<Libro>
  }

  create(libro: Libro): Observable<Libro> {
    return this.http.post(this.urlBase, libro) as Observable<Libro>
  }

  update(id: number, libro: Libro): Observable<Libro>{
    return this.http.put(this.urlBase + id, libro) as Observable<Libro>
  }

  delete(id: number): Observable<Array<Libro>>{
    return this.http.delete(this.urlBase + id) as Observable<Array<Libro>>
  }
}
