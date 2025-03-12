import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { medicalRecordCreationDTO } from '../medicalRecordDTOs.model';
@Component({
  selector: 'app-form-medical-record',
  templateUrl: './form-medical-record.component.html',
  styleUrls: ['./form-medical-record.component.css']
})
export class FormMedicalRecordComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    this.form = new FormGroup({});
    
   }

  @Input()
  model: medicalRecordCreationDTO;

  form: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<medicalRecordCreationDTO> = new EventEmitter<medicalRecordCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      pigID: [''],
      date: [''],
      notes: ['']
    });
    if (this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }
  saveChanges(){
    //console.log("form medical record");
    //console.log(this.model);
    console.log(this.form.value);
    //console.log(this.model.notes);
    this.onSaveChanges.emit(this.form.value);
  }

}
