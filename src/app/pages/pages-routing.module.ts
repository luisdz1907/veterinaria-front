import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../guards/auth.guard';
import { MascotasComponent } from './mascotas/mascotas.component';
import { CalendarioComponent } from './calendario/calendario.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cliente',
    loadChildren: () => import('./clientes/clientes.module').then((m) => m.ClientesModule)
  },
  {
    path: 'medicos',
    loadChildren: () => import('./medicos/medicos.module').then((m) => m.MedicosModule)
  },
  {
    path: 'tipo-animal',
    loadChildren: () => import('./tipo-animal/tipo-animal.module').then((m) => m.TipoAnimalModule)
  }
  ,
  {
    path: 'mascotas',
    component: MascotasComponent,
  },
  {
    path: 'calendario',
    component: CalendarioComponent,
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
