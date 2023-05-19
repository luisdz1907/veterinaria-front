import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearMedicoComponent } from './crear-medico/crear-medico.component';
import { ListaMedicosComponent } from './lista-medicos/lista-medicos.component';

const routes: Routes = [
  {
    path:'crear-medico',
    component:CrearMedicoComponent
  },
  {
    path:'lista',
    component:ListaMedicosComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MedicosRoutingModule { }
