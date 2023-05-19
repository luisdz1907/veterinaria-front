import { Component, OnInit, TemplateRef, OnDestroy } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PaginationInstance } from "ngx-pagination";
import { Medico } from 'src/app/interfaces';
import { MedicoService } from 'src/app/services/medico.service';
import { Subscription } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista-medicos',
  templateUrl: './lista-medicos.component.html',
  styleUrls: ['./lista-medicos.component.css']
})
export class ListaMedicosComponent implements OnInit,OnDestroy {
  public medicosList: Medico[] = []
  public medicosFilter: Medico[] = []
  public loader: boolean = false
  public config: PaginationInstance = {
    id: 'custom',
    itemsPerPage: 6,
    currentPage: 1
  };
  public bsModalRef?: BsModalRef
  private medicoSuscription!:Subscription
  constructor(
    private medicoService: MedicoService,
    private modalService: BsModalService
  ) {

  }

  ngOnInit(): void {
  this.medicoSuscription = this.medicoService.medicoChange$.subscribe(_resp => {
      if (_resp) {
        this.getAllMedicos()
      }
    })
    this.getAllMedicos()
  }

  ngOnDestroy(): void {
    this.medicoSuscription.unsubscribe()
  }

  onOpenModal(temp: TemplateRef<any>) {
    this.bsModalRef = this.modalService.show(temp, Object.assign({}, { class: 'gray modal-lg' })
    );
  }

  onCloseModal() {
    this.bsModalRef?.hide()
  }

  public onPageChange(event: any): void {
    this.config.currentPage = event;
  }

  filterTable(search: any) {
    if (!search.value) {
      this.medicosFilter = this.medicosList
    }
    this.medicosFilter = this.medicosFilter.filter(regs => {
      const value = regs.nombre.toLocaleLowerCase() + ' ' + regs.apellidos.toLocaleLowerCase()
      return value.includes(search.value.toLocaleLowerCase())
    })
  }

  getAllMedicos() {
    this.loader = true
    this.medicoService.getAllMedicos().subscribe(_resp => {
      console.log(_resp)
      this.medicosFilter = _resp
      this.medicosList = _resp
      this.loader = false
    })
  }

  deleteMedico(medico:Medico): void {
    const that = this
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: false
    })

    swalWithBootstrapButtons.fire({
      title: `Desea eliminar al medico ${medico.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar',
      cancelButtonText: 'No, cancelar',
      reverseButtons: true
    }).then((result: any) => {
      if (result.isConfirmed) {
        // Eliminar cliente
        this.medicoService.deleteMedico(medico.id).subscribe({
          next(_resp) {
            that.medicoService.medicoChange$.next(true)
            swalWithBootstrapButtons.fire(
              'Deleted!',
              'Medico eliminado correctamente 👍',
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
