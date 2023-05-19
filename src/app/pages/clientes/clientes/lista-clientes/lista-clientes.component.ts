import { Component, OnDestroy, OnInit, TemplateRef } from '@angular/core';
import { Subscription } from "rxjs";
import { PaginationInstance } from "ngx-pagination";

import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Cliente } from 'src/app/interfaces';
import { ClienteService } from 'src/app/services/cliente.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.css']
})
export class ListaClientesComponent implements OnInit {

  public clientesList: Cliente[] = []
  public clientesFilter: Cliente[] = []
  public loader: boolean = false
  private clientChangeSuscription$!: Subscription

  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 6,
    currentPage: 1
  };

  public bsModalRef?: BsModalRef
  constructor(
    private clienteService: ClienteService,
    private modalService: BsModalService
  ) {

  }

  ngOnInit(): void {
    this.clienteService.clientChange$?.subscribe(resp => {
      if (resp) {
        this.getAllClients()
      }
    })

    this.getAllClients()
  }


  onOpenModal(temp: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(temp, Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  onCloseModal() {
    this.bsModalRef?.hide()
  }

  onPageChange(event: any): void {
    this.config.currentPage = event;
  }

  filterTable(search: any) {
    if (!search.value) {
      this.clientesFilter = this.clientesList
    }

    this.clientesFilter = this.clientesList.filter(regs => {
      const value = regs.nombres.toLocaleLowerCase() + ' ' + regs.apellidos.toLocaleLowerCase()
      return value.includes(search.value.toLocaleLowerCase())
    })
  }

  getAllClients(): void {
    this.loader = true
    this.clienteService.getAllClientes().subscribe(clientes => {
      if (Object.values(clientes).length === 1) return
      this.clientesList = clientes
      this.clientesFilter = clientes
      this.loader = false
    })
  }

  deleteCliente(cliente: Cliente): void {
    const that = this
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: `Desea eliminar el cliente ${cliente.nombres}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result: any) => {
      if (result.isConfirmed) {
        // Eliminar cliente
        this.clienteService.deleteClienteById(cliente.id).subscribe({
          next(_resp) {
            that.clienteService.clientChange$.next(true)
            swalWithBootstrapButtons.fire(
              'Deleted!',
              'Cliente eliminado correctamente 👍',
              'success'
            )
          },
        })

      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelled',
          'Eliminación cancelada',
          'error'
        )
      }
    })
  }
}
