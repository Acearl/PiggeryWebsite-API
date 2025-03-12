import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
//expenses
import { CreateExpenseComponent } from './Expenses/create-expense/create-expense.component';
import { EditExpenseComponent } from './Expenses/edit-expense/edit-expense.component';
import { IndexExpensesComponent } from './Expenses/index-expenses/index-expenses.component';
//medical records
import { CreateMedicalRecordComponent } from './MedicalRecords/create-medical-record/create-medical-record.component';
import { EditMedicalRecordComponent } from './MedicalRecords/edit-medical-record/edit-medical-record.component';
import { IndexMedicalRecordsComponent } from './MedicalRecords/index-medical-records/index-medical-records.component';
//pens
import { CreatePenComponent } from './Pens/create-pen/create-pen.component';
import { EditPenComponent } from './Pens/edit-pen/edit-pen.component';
import { IndexPensComponent } from './Pens/index-pens/index-pens.component';
//pigs
import { CreatePigComponent } from './Pigs/create-pig/create-pig.component';
import { EditPigComponent } from './Pigs/edit-pig/edit-pig.component';
import { IndexPigsComponent } from './Pigs/index-pigs/index-pigs.component';
//product in sale
import { CreateProductInSaleComponent } from './ProductInSale/create-product-in-sale/create-product-in-sale.component';
import { EditProductInSaleComponent } from './ProductInSale/edit-product-in-sale/edit-product-in-sale.component';
import { IndexProductInSalesComponent } from './ProductInSale/index-product-in-sales/index-product-in-sales.component';
//sales
import { CreateSaleComponent } from './Sales/create-sale/create-sale.component';
import { EditSaleComponent } from './Sales/edit-sale/edit-sale.component';
import { IndexSalesComponent } from './Sales/index-sales/index-sales.component';
//weight records
import { CreateWeightRecordComponent } from './WeightRecords/create-weight-record/create-weight-record.component';
import { EditWeightRecordComponent } from './WeightRecords/edit-weight-record/edit-weight-record.component';
import { IndexWeightRecordsComponent } from './WeightRecords/index-weight-records/index-weight-records.component';

const routes: Routes = [

  {path:'expenses', component: IndexExpensesComponent},
  {path:'expenses/create', component: CreateExpenseComponent},
  {path:'expenses/edit/:id', component: EditExpenseComponent},

  {path:'medical-records', component: IndexMedicalRecordsComponent},
  {path:'medical-records/create', component: CreateMedicalRecordComponent},
  {path:'medical-records/edit/:id', component: EditMedicalRecordComponent},

  {path:'pens', component: IndexPensComponent},
  {path:'pens/create', component: CreatePenComponent},
  {path:'pens/edit/:id', component: EditPenComponent},

  {path:'pigs', component: IndexPigsComponent},
  {path:'pigs/create', component: CreatePigComponent},
  {path:'pigs/edit/:id', component: EditPigComponent},

  {path:'product-in-sales', component: IndexProductInSalesComponent},
  {path:'product-in-sales/create', component: CreateProductInSaleComponent},
  {path:'product-in-sales/edit/:id', component: EditProductInSaleComponent},

  {path:'sales', component: IndexSalesComponent},
  {path:'sales/create', component: CreateSaleComponent},
  {path:'sales/edit/:id', component: EditSaleComponent},

  {path:'weight-records', component: IndexWeightRecordsComponent},
  {path:'weight-records/create', component: CreateWeightRecordComponent},
  {path:'weight-records/edit/:id', component: EditWeightRecordComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
