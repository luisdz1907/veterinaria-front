import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, shareReplay, share } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseCreateUser, ResponseLoginUser } from '../interfaces/';
import { User } from '../interfaces/response-login-user.interface';

const path = environment.apiUrl
console.log(path)
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private cache$!: Observable<User>;

  constructor(
    private http: HttpClient
  ) { }


  registerUser(user: any) {
    return this.http.post<ResponseCreateUser>(`${path}/auth/register`, user)
  }

  loginUser(user: ResponseLoginUser) {
    return this.http.post<ResponseLoginUser>(`${path}/auth/login`, user).pipe(
      switchMap(async (_res: ResponseLoginUser) => {
        await localStorage.setItem('user', _res.access_token)
        return _res
      })
    )
  }


  getProfileUser():Observable<User>{
    if (!this.cache$) {
      this.cache$ = this.http.get<User>(`${path}/user-profile`).pipe(
        share()
      )
    }
    return this.cache$
  }

  logoutUser(user?:User):Observable<any>{
    return this.http.post<any>(`${path}/logout`, user)
  }
}
