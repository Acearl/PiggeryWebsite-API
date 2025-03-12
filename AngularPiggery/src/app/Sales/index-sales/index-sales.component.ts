import { Component, OnInit } from '@angular/core';
import { saleDTO } from '../saleDTOs.model';
import { ActivatedRoute, Router } from '@angular/router';
import { saleCreationDTO } from '../saleDTOs.model';
import { saleService } from '../sale-service.service';
import { DatePipe } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
//import { MatTable } from '@angular/material/table';
//import { MatCell } from '@angular/material/table';
//import { MatCellDef } from '@angular/material/table';

@Component({
  selector: 'app-index-sales',
  templateUrl: './index-sales.component.html',
  styleUrls: ['./index-sales.component.css']
})

export class IndexSalesComponent implements OnInit {

  sales: saleDTO[] = [
    //{id:1,date: Date.now().toString(), cost: 20, notes: "Default(Loading)"}
  ];
  displayedColumns: string[] = ['id', 'customer', 'dateSold', 'price', 'notes','actions'];
  totalAmountOfRecords: any;
  currentpage = 1;
  pageSize = 20;
  //dataSource = new MatTableDataSource(this.sales);
  constructor(private saleService: saleService, private router: Router) { }
  
  ngOnInit(): void {
    this.loadData();
  }


  loadData()
  {
    this.saleService.get(this.currentpage, this.pageSize).subscribe((response: HttpResponse<saleDTO[]>) =>
    {
      this.sales = response.body;
      this.totalAmountOfRecords = response.headers.get("totalAmountOfRecords");
      //console.log(response.headers.get("totalAmountOfRecords"));
      //console.log(this.sales.length);
    }); 
  }
  delete(id:number)
  {
    
    this.saleService.delete(id).subscribe(()=>{
      this.loadData();
      this.router.navigate(["/sales"]);
    });
    
  }
  updatePagination(event: PageEvent)
  {
    this.currentpage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }
}
