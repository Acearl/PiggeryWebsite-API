import { Component, OnInit } from '@angular/core';
import { expenseDTO } from '../expenseDTOs.model';
import { ActivatedRoute, Router } from '@angular/router';
import { expenseCreationDTO } from '../expenseDTOs.model';
import { expenseService } from '../expense-service.service';
import { DatePipe } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
//import { MatTable } from '@angular/material/table';
//import { MatCell } from '@angular/material/table';
//import { MatCellDef } from '@angular/material/table';

@Component({
  selector: 'app-index-expenses',
  templateUrl: './index-expenses.component.html',
  styleUrls: ['./index-expenses.component.css']
})

export class IndexExpensesComponent implements OnInit {

  expenses: expenseDTO[] = [
    //{id:1,date: Date.now().toString(), cost: 20, notes: "Default(Loading)"}
  ];
  displayedColumns: string[] = ['id', 'date', 'cost', 'notes', 'actions'];
  totalAmountOfRecords: any;
  currentpage = 1;
  pageSize = 20;
  //dataSource = new MatTableDataSource(this.expenses);
  constructor(private expenseService: expenseService, private router: Router) { }
  
  ngOnInit(): void {
    this.loadData();
  }


  loadData()
  {
    this.expenseService.get(this.currentpage, this.pageSize).subscribe((response: HttpResponse<expenseDTO[]>) =>
    {
      this.expenses = response.body;
      this.totalAmountOfRecords = response.headers.get("totalAmountOfRecords");
      //console.log(response.headers.get("totalAmountOfRecords"));
      //console.log(this.expenses.length);
    }); 
  }
  delete(id:number)
  {
    
    this.expenseService.delete(id).subscribe(()=>{
      this.loadData();
      this.router.navigate(["/expenses"]);
    });
    
  }
  updatePagination(event: PageEvent)
  {
    this.currentpage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }
}
