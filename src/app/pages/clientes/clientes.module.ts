import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import {  NgxPaginationModule } from "ngx-pagination";
import { ClientesRoutingModule } from './clientes-routing.module';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';
import { CrearPacienteComponent } from './pacientes/crear-paciente/crear-paciente.component';
import { ListaPacienteComponent } from './pacientes/lista-paciente/lista-paciente.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
  
    CrearClienteComponent,
       ListaClientesComponent,
       CrearPacienteComponent,
       ListaPacienteComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ClientesRoutingModule,
    MaterialModule,
    SharedModule,
    NgxPaginationModule,
    ModalModule.forRoot()

  ]
})
export class ClientesModule { }
