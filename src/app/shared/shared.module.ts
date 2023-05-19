import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingComponent } from './components/loading/loading.component';
import { ImageUserPipe } from './pipe/image-user.pipe';
import { ModalComponent } from './components/modal/modal.component';



@NgModule({
  declarations: [
    LoadingComponent,
    ImageUserPipe,
    ModalComponent,
    

  ],
  imports: [
    CommonModule,
  ],
  exports: [
    LoadingComponent,
    ImageUserPipe,
    ModalComponent
    
  ]
})
export class SharedModule { }
