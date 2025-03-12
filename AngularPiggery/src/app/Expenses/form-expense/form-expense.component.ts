import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { expenseCreationDTO } from '../expenseDTOs.model';
@Component({
  selector: 'app-form-expense',
  templateUrl: './form-expense.component.html',
  styleUrls: ['./form-expense.component.css']
})
export class FormExpenseComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    this.form = new FormGroup({});
    
   }

  @Input()
  model: expenseCreationDTO;

  form: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<expenseCreationDTO> = new EventEmitter<expenseCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      date: [''],
      cost: ['', {Validators: [Validators.required]}],
      notes: ['']
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
