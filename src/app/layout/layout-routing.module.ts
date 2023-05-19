import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../guards/auth.guard';


const routes: Routes = [
  {
    path: 'main',
    canActivate:[AuthGuard],
    component: LayoutComponent,
    loadChildren: () => import('../pages/pages.module').then((m) => m.PagesModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
