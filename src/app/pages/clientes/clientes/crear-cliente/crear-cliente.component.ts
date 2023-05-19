import { Component, OnInit,Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { switchMap } from "rxjs";
import { ClienteService } from 'src/app/services/cliente.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';

@Component({
  selector: 'app-crear-cliente',
  templateUrl: './crear-cliente.component.html',
  styleUrls: ['./crear-cliente.component.css']
})
export class CrearClienteComponent implements OnInit {

  public formCliente!: FormGroup

  public loadingButtonSubmit: boolean = false

  @Input()
  public bsModalRef?: BsModalRef
  constructor(
    private fb: FormBuilder,
    private clienteService: ClienteService,
    private alertService: SweetAlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    this.formCliente = this.fb.group({
      nombres: new FormControl<string>('', [Validators.required]),
      apellidos: new FormControl<string>('', [Validators.required]),
      identificacion: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      direccion: new FormControl<string>('', [Validators.required, Validators.minLength(5)]),
    })

  }
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => id)
      )
      .subscribe(resp => {
        console.log(resp)
      })
  }


  onSubmit(form: FormGroup) {
    this.loadingButtonSubmit = true
    this.clienteService.createCliente(form.value).subscribe(_resp => {
      this.loadingButtonSubmit = false

      if (!_resp) {
        return this.alertService.showAlert('Se produjo un error al guardar los cambios. Por favor, revise', 'error', false)
      }
      this.bsModalRef?.hide()
      this.alertService.showAlert('Cliente creado correctamente', 'success', false);
      this.clienteService.clientChange$.next(true)
      // return this.router.navigateByUrl('/main/cliente/lista-clientes')
    })
  }
}
