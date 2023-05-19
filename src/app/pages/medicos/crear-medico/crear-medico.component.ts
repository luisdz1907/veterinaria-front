import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { MedicoService } from 'src/app/services/medico.service';
import { SweetAlertService } from 'src/app/services/sweet-alert.service';

@Component({
  selector: 'app-crear-medico',
  templateUrl: './crear-medico.component.html',
  styleUrls: ['./crear-medico.component.css']
})
export class CrearMedicoComponent {
  public formMedico!: FormGroup

  public loadingButtonSubmit: boolean = false

  @Input()
  public bsModalRef?: BsModalRef
  constructor(
    private fb: FormBuilder,
    private medicoService:MedicoService,
    private alertService: SweetAlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {

    this.formMedico = this.fb.group({
      nombre: new FormControl<string>('', [Validators.required]),
      apellidos: new FormControl<string>('', [Validators.required]),
      identificacion: new FormControl('', [Validators.required]),
      celular: new FormControl('', [Validators.required]),
      email: new FormControl<string>('', [Validators.required, Validators.email]),
      direccion: new FormControl<string>('', [Validators.required, Validators.minLength(5)]),
      estado: new FormControl<boolean>(true),
    })

  }
  ngOnInit(): void {
    // this.activatedRoute.params
    //   .pipe(
    //     switchMap(({ id }) => id)
    //   )
    //   .subscribe(resp => {
    //     console.log(resp)
    //   })
  }


  onSubmit(form: FormGroup) {
    this.loadingButtonSubmit = true
    this.medicoService.createMedico(form.value).subscribe(_resp => {
      this.loadingButtonSubmit = false

      if (!_resp) {
        return this.alertService.showAlert('Se produjo un error al guardar los cambios. Por favor, revise', 'error', false)
      }
      this.bsModalRef?.hide()
      this.alertService.showAlert('Medico creado correctamente', 'success', false);
      this.medicoService.medicoChange$.next(true)
    })
  }
}
