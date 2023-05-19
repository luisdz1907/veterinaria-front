import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';
import { ResponseLoginUser } from '../interfaces';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthenticationService) {}


  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    const token = localStorage.getItem('user') || ''
    // console.log(token.access_token)
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(request);
  }
}
