import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { pigCreationDTO } from '../pigDTOs.model';
import { designation } from '../pigDTOs.model';
import { sex } from '../pigDTOs.model';
import { status } from '../pigDTOs.model';
import {FormsModule} from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
@Component({
  selector: 'app-form-pig',
  templateUrl: './form-pig.component.html',
  styleUrls: ['./form-pig.component.css'],
})
export class FormPigComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    this.form = new FormGroup({});
    console.log(designation);
   }

  @Input()
  model: pigCreationDTO;
  designation = designation;
  sex = sex;
  status = status;
  form: FormGroup;
  
  @Output()
  onSaveChanges: EventEmitter<pigCreationDTO> = new EventEmitter<pigCreationDTO>();

  ngOnInit(): void {

    this.form = this.formBuilder.group({
      penID: [''],
      sex: [''],
      motherID: [''],
      fatherID: [''],
      designation: [''],
      birthDate: [''],
      notes: [''],
      status: ['']
    });
    if (this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }
  saveChanges(){
    //console.log("form expense");
    //console.log(this.model);
    //console.log(this.form.value);
    //console.log(this.model.notes);
    this.onSaveChanges.emit(this.form.value);
  }

}
