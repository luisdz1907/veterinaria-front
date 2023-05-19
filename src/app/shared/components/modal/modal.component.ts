import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {

  public bsModalRef?:BsModalRef
  constructor(){

  }

  onCloseModal(){
    this.bsModalRef?.hide()
  }
}
