import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TipoAnimalRoutingModule } from './tipo-animal-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TipoAnimalRoutingModule,
    MaterialModule,
    SharedModule,
    
  ]
})
export class TipoAnimalModule { }
