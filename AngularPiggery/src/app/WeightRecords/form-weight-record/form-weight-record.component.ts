import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { weightRecordCreationDTO } from '../weightRecordDTOs.model';
@Component({
  selector: 'app-form-weight-record',
  templateUrl: './form-weight-record.component.html',
  styleUrls: ['./form-weight-record.component.css']
})
export class FormWeightRecordComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    this.form = new FormGroup({});
    
   }

  @Input()
  model: weightRecordCreationDTO;

  form: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<weightRecordCreationDTO> = new EventEmitter<weightRecordCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      pigID: ['',{Validators: [Validators.required]}],
      dateWeighed: ['', {Validators: [Validators.required]}],
      weight: ['',{Validators: [Validators.required]}]
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
