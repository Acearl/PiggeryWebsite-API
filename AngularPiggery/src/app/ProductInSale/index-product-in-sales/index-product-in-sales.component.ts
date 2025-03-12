import { Component, OnInit } from '@angular/core';
import { productInSaleDTO } from '../productInSaleDTOs.model';
import { ActivatedRoute, Router } from '@angular/router';
import { productInSaleCreationDTO } from '../productInSaleDTOs.model';
import { ProductInSaleService } from '../product-in-sales-service.service';
import { DatePipe } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
//import { MatTable } from '@angular/material/table';
//import { MatCell } from '@angular/material/table';
//import { MatCellDef } from '@angular/material/table';

@Component({
  selector: 'app-index-productInSales',
  templateUrl: './index-product-in-sales.component.html',
  styleUrls: ['./index-product-in-sales.component.css']
})

export class IndexProductInSalesComponent implements OnInit {

  productInSales: productInSaleDTO[] = [
    //{id:1,date: Date.now().toString(), cost: 20, notes: "Default(Loading)"}
  ];
  displayedColumns: string[] = ['id', 'SaleID', 'PigID', 'notes', 'actions'];
  totalAmountOfRecords: any;
  currentpage = 1;
  pageSize = 20;
  //dataSource = new MatTableDataSource(this.productInSales);
  constructor(private ProductInSaleService: ProductInSaleService, private router: Router) { }
  
  ngOnInit(): void {
    this.loadData();
  }


  loadData()
  {
    this.ProductInSaleService.get(this.currentpage, this.pageSize).subscribe((response: HttpResponse<productInSaleDTO[]>) =>
    {
      this.productInSales = response.body;
      this.totalAmountOfRecords = response.headers.get("totalAmountOfRecords");
      //console.log(response.headers.get("totalAmountOfRecords"));
      console.log(this.productInSales.length);
      console.log(this.productInSales[0]);
    }); 
  }
  delete(id:number)
  {
    
    this.ProductInSaleService.delete(id).subscribe(()=>{
      this.loadData();
      this.router.navigate(["/product-in-sales"]);
    });
    
  }
  updatePagination(event: PageEvent)
  {
    this.currentpage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }
}
