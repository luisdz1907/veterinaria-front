import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearClienteComponent } from './clientes/crear-cliente/crear-cliente.component';
import { ListaClientesComponent } from './clientes/lista-clientes/lista-clientes.component';
import { ListaPacienteComponent } from './pacientes/lista-paciente/lista-paciente.component';


const routes: Routes = [
  {
    path: 'lista-clientes',
    component: ListaClientesComponent
  },
  {
    path: 'crear-cliente',
    component: CrearClienteComponent
  },
  {
    path: 'edit/:id',
    component: CrearClienteComponent
  },
  {
    path: 'lista-pacientes',
    component: ListaPacienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientesRoutingModule { }
