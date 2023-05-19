import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoAnimalComponent } from './tipo-animal.component';

const routes: Routes = [
  {
    path:'',
    component:TipoAnimalComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TipoAnimalRoutingModule { }
