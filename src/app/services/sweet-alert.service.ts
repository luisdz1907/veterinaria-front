import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {

  constructor() { }

  showAlert(message: string, type: 'success' | 'warning' | 'error' | 'info', showConfirm: boolean) {
    Swal.fire({
      position: 'center',
      text: message,
      icon: type,
      showConfirmButton: showConfirm,
      timer: 1500
    });
  }
}
