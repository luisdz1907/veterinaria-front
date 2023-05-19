import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { TipoAnimal } from '../interfaces';
const path = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class TipoAnimalService {

  constructor(
    private http: HttpClient
  ) { }

  getAllTipoAnimal(): Observable<TipoAnimal[]> {
    return this.http.get<TipoAnimal[]>(`${path}/tipoanimal`)
      .pipe(
        catchError(error => of([]))
      )
  }

  postCreateTipoAnimal(): Observable<TipoAnimal | boolean> {
    return this.http.get<TipoAnimal | boolean>(`${path}/tipoanimal`)
      .pipe(
        catchError(error => of(false))
      )
  }

  deleteTipoAnimalById(id: number):Observable<boolean> {
    return this.http.delete<boolean>(`${path}/tipoanimal/${id}`)
      .pipe(
        catchError((error) => of(false))
      )
  }
}
