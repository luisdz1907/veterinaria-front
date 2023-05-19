import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationRoutingModule } from './authentication/authentication-routing.module';
import { LayoutModule } from './layout/layout.module';

const routes: Routes = [
  {
    path: 'main',
    loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule)
  },
  
  {
    path: 'auth',
    loadChildren: () => import('./authentication/authentication.module').then((m) => m.AuthenticationModule)
  },
  {
    path: '**',
    redirectTo: 'main',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), LayoutModule, AuthenticationRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
