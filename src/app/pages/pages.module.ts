import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { MascotasComponent } from './mascotas/mascotas.component';
import { CalendarioComponent } from './calendario/calendario.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { TipoAnimalComponent } from './tipo-animal/tipo-animal.component';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    MascotasComponent,
    CalendarioComponent,
    TipoAnimalComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    FullCalendarModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class PagesModule { }
