import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, delay, of, Subject } from 'rxjs';
import { Cliente } from '../interfaces/cliente.interface';
import { environment } from 'src/environments/environment';
const path = environment.apiUrl;

@Injectable({
  providedIn: 'root',
})
export class ClienteService {
  public clientChange$ = new Subject<boolean>()
  constructor(private http: HttpClient) { }

  getAllClientes(): Observable<Cliente[]> {
    return this.http
      .get<Cliente[]>(`${path}/cliente`)
      .pipe(
        catchError((error) => of([]))
        );
  }

  getClienteById(id: string): Observable<Cliente | {}> {
    return this.http
      .get<Cliente | {}>(`${path}/cliente/${id}`)
      .pipe(catchError((error) => of({})));
  }

  deleteClienteById(id: number) {
    return this.http.delete<boolean>(`${path}/cliente/${id}`)
      .pipe(
        catchError((error) => of(false))
      )
  }

  createCliente(cliente: Cliente): Observable<Cliente | boolean> {
    return this.http
      .post<Cliente | boolean>(`${path}/cliente`, cliente)
      .pipe(
        delay(2000),
        catchError((error) => of(false))
      );
  }
}
