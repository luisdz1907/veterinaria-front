import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tipo-animal',
  templateUrl: './tipo-animal.component.html',
  styleUrls: ['./tipo-animal.component.css']
})
export class TipoAnimalComponent {

  public loadingButtonSubmit:boolean = false

  public formTipoAnimal!:FormGroup

  constructor(
    private fb:FormBuilder
  ){
    this.formTipoAnimal = this.fb.group({
      nombre_tipo: new FormControl('', Validators.minLength(1))
    })
  }
}
