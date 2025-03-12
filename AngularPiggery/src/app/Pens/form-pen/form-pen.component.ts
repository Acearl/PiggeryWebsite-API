import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { penCreationDTO } from '../penDTOs.model';
@Component({
  selector: 'app-form-pen',
  templateUrl: './form-pen.component.html',
  styleUrls: ['./form-pen.component.css']
})
export class FormPenComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    this.form = new FormGroup({});
    
   }

  @Input()
  model: penCreationDTO;

  form: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<penCreationDTO> = new EventEmitter<penCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      notes: ['']
    });
    if (this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }
  saveChanges(){
    //console.log("form pen");
    //console.log(this.model);
    //console.log(this.form.value);
    // console.log("hit");
    // console.log(this.form);
    this.onSaveChanges.emit(this.form.value);
  }

}
