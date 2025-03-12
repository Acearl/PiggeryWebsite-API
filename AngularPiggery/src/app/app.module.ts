import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ReactiveFormsModule, FormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2'

import { FormExpenseComponent } from './Expenses/form-expense/form-expense.component';
import { IndexExpensesComponent } from './Expenses/index-expenses/index-expenses.component';
import { EditExpenseComponent } from './Expenses/edit-expense/edit-expense.component';
import { CreateExpenseComponent } from './Expenses/create-expense/create-expense.component';

import { FormPenComponent } from './Pens/form-pen/form-pen.component';
import { IndexPensComponent } from './Pens/index-pens/index-pens.component';
import { EditPenComponent } from './Pens/edit-pen/edit-pen.component';
import { CreatePenComponent } from './Pens/create-pen/create-pen.component';

import { MatNativeDateModule } from '@angular/material/core';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { GenericListComponent } from './Utilities/generic-list/generic-list.component';

import { CreatePigComponent } from './Pigs/create-pig/create-pig.component';
import { EditPigComponent } from './Pigs/edit-pig/edit-pig.component';
import { FormPigComponent } from './Pigs/form-pig/form-pig.component';
import { IndexPigsComponent } from './Pigs/index-pigs/index-pigs.component';

import { CreateMedicalRecordComponent } from './MedicalRecords/create-medical-record/create-medical-record.component';
import { EditMedicalRecordComponent } from './MedicalRecords/edit-medical-record/edit-medical-record.component';
import { FormMedicalRecordComponent } from './MedicalRecords/form-medical-record/form-medical-record.component';
import { IndexMedicalRecordsComponent } from './MedicalRecords/index-medical-records/index-medical-records.component';

import { CreateSaleComponent } from './Sales/create-sale/create-sale.component';
import { EditSaleComponent } from './Sales/edit-sale/edit-sale.component';
import { FormSaleComponent } from './Sales/form-sale/form-sale.component';
import { IndexSalesComponent } from './Sales/index-sales/index-sales.component';

import { CreateWeightRecordComponent } from './WeightRecords/create-weight-record/create-weight-record.component';
import { EditWeightRecordComponent } from './WeightRecords/edit-weight-record/edit-weight-record.component';
import { FormWeightRecordComponent } from './WeightRecords/form-weight-record/form-weight-record.component';
import { IndexWeightRecordsComponent } from './WeightRecords/index-weight-records/index-weight-records.component';

import { CreateProductInSaleComponent } from './ProductInSale/create-product-in-sale/create-product-in-sale.component';
import { EditProductInSaleComponent } from './ProductInSale/edit-product-in-sale/edit-product-in-sale.component';
import { FormProductInSaleComponent } from './ProductInSale/form-product-in-sale/form-product-in-sale.component';
import { IndexProductInSalesComponent } from './ProductInSale/index-product-in-sales/index-product-in-sales.component';


@NgModule({
  declarations: [
    AppComponent,
    GenericListComponent,
    NavMenuComponent,
    FormExpenseComponent,
    IndexExpensesComponent,
    EditExpenseComponent,
    CreateExpenseComponent,
    FormPenComponent,
    IndexPensComponent,
    EditPenComponent,
    CreatePenComponent,
    CreatePigComponent,
    EditPigComponent,
    FormPigComponent,
    IndexPigsComponent,
    CreateMedicalRecordComponent,
    EditMedicalRecordComponent,
    FormMedicalRecordComponent,
    IndexMedicalRecordsComponent,
    CreateSaleComponent,
    EditSaleComponent,
    FormSaleComponent,
    IndexSalesComponent,
    CreateWeightRecordComponent,
    EditWeightRecordComponent,
    FormWeightRecordComponent,
    IndexWeightRecordsComponent,
    CreateProductInSaleComponent,
    EditProductInSaleComponent,
    FormProductInSaleComponent,
    IndexProductInSalesComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatNativeDateModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [
    MatDatepickerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
