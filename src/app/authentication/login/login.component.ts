import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseLoginUser } from 'src/app/interfaces/';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;
  public loadingButtonLogin: boolean = false


  constructor(
    private authService: AuthenticationService,
    private fb: FormBuilder,
    private router: Router,
    private alertService: SweetAlertService
  ) {
    this.formLogin = this.fb.group({
      email: new FormControl('admin@admin.com', [
        Validators.email,
        Validators.required,
      ]),
      password: new FormControl('123456789', [Validators.required]),
    });
  }
  ngOnInit(): void { }

  sendData(user: FormGroup) {
    const that = this;
    this.loadingButtonLogin = true
    this.authService.loginUser(user.value).subscribe({
      next(_resp: ResponseLoginUser) {
        that.loadingButtonLogin = false
        that.alertService.showAlert('Bienvenido al sistema', 'success', false)
        that.router.navigate(['main'], { replaceUrl: true });
      },
      error(_err: any) {
        if (_err.error.password?.length === 1) {
          that.alertService.showAlert('Error la contraña debe tener minimo 6 caracteres', 'error', false)
        }

        if (_err.error.error) {
          that.alertService.showAlert('Error, el usuario no existe o contraña incorrecta', 'error', false)
        }
      },
    });
  }
}
