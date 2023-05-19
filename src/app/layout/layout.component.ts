import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../interfaces/response-login-user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit{

  public listLinks: any[] = [
    {
      name: 'Dashboard',
      icon: 'bx bxs-dashboard',
      childrens: []
    },
    {
      name: 'Usuarios',
      icon: 'bx bxs-user',
      childrens: [
        {
          title: 'Clientes',
          link: '/main/cliente/lista-clientes',
          access: [],
        },
        {
          title: 'Pacientes',
          link: '/main/cliente/lista-pacientes',
          access: [],
        },
      ]
    },
    {
      name: 'Medicos',
      icon: 'bx bx-plus-medical',
      childrens: [
        {
          title: 'Lista medicos',
          link: '/main/medicos/lista',
          access: [],
        },
      ]
    },
    {
      name: 'Calendario',
      icon: 'bx bxs-calendar',
      childrens: [
        {
          title: 'Calendario',
          link: '/main/calendario',
          access: [],
        },
        {
          title: 'Generar cita',
          link: '#',
          access: [],
        },
        {
          title: 'Listado de citas',
          link: '#',
          access: [],
        },
      ]
    },
    {
      name: 'Mascotas',
      icon: 'bx bxs-dog',
      childrens: [
        {
          title: 'Tipo mascota',
          link: '/main/tipo-animal',
          access: [],
        },
        {
          title: 'Lista mascota',
          link: '/main/mascotas',
          access: [],
        },
      ]
    },
    {
      name: 'Facturas',
      icon: 'bx bx-file',
      childrens: [
        {
          title: 'Lista Facturas',
          link: '#',
          access: [],
        }
      ]
    },
  ]

  public collapsed!: number | null

  public userSesion?:User
  constructor(
    private authService:AuthenticationService,
    private router:Router
  ){

  }

  ngOnInit(): void {
    this.authService.getProfileUser().subscribe(user =>{
      this.userSesion = user
    })
  }

  toggleSidebar(id: number | null) {
    this.collapsed = id
  };

  logoutUser(){
    this.authService.logoutUser(this.userSesion).subscribe(_resp =>{
      localStorage.removeItem('user')
      this.router.navigateByUrl('/auth/login')
    })
  }
 
}
