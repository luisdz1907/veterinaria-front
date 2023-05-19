import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, catchError, of, Subject } from 'rxjs';
import { Medico } from '../interfaces';



const path = environment.apiUrl;
@Injectable({
  providedIn: 'root'
})
export class MedicoService {

  public medicoChange$ = new Subject<boolean>()
  constructor(
    private http: HttpClient
  ) { }

  getAllMedicos(): Observable<Medico[]> {
    return this.http.get<Medico[]>(`${path}/medico`)
      .pipe(
        catchError(errr => of([]))
      )
  }

  createMedico(medico: Medico): Observable<Medico | boolean> {
    return this.http.post<Medico | boolean>(`${path}/medico`, medico).pipe(
      catchError(error => of(false))
    )
  }

  deleteMedico(id:number){
    return this.http.delete<boolean>(`${path}/medico/${id}`)
    .pipe(
      catchError((error) => of(false))
    )
  }
}
