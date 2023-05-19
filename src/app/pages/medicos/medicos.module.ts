import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  NgxPaginationModule } from "ngx-pagination";

import { MedicosRoutingModule } from './medicos-routing.module';
import { CrearMedicoComponent } from './crear-medico/crear-medico.component';
import { ListaMedicosComponent } from './lista-medicos/lista-medicos.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CrearMedicoComponent,
    ListaMedicosComponent
  ],
  imports: [
    CommonModule,
    MedicosRoutingModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule,
    NgxPaginationModule,
    ModalModule.forRoot()
  ]
})
export class MedicosModule { }
