import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { productInSaleCreationDTO } from '../productInSaleDTOs.model';
@Component({
  selector: 'app-form-productInSale',
  templateUrl: './form-product-in-sale.component.html',
  styleUrls: ['./form-product-in-sale.component.css']
})
export class FormProductInSaleComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
    this.form = new FormGroup({});
    
   }

  @Input()
  model: productInSaleCreationDTO;

  form: FormGroup;

  @Output()
  onSaveChanges: EventEmitter<productInSaleCreationDTO> = new EventEmitter<productInSaleCreationDTO>();

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      SaleID: ['', {Validators: [Validators.required]}],
      PigID: ['', {Validators: [Validators.required]}],
      notes: ['']
    });
    if (this.model !== undefined){
      this.form.patchValue(this.model);
    }
  }
  saveChanges(){
    //console.log("form productInSale");
    //console.log(this.model);
    //console.log(this.form.value);
    //console.log(this.model.notes);
    this.onSaveChanges.emit(this.form.value);
  }

}
