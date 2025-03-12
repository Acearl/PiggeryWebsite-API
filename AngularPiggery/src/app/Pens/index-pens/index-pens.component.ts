import { Component, OnInit } from '@angular/core';
import { penDTO } from '../penDTOs.model';
import { ActivatedRoute, Router } from '@angular/router';
import { penCreationDTO } from '../penDTOs.model';
import { penService } from '../pen-service.service';
import { DatePipe } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
//import { MatTable } from '@angular/material/table';
//import { MatCell } from '@angular/material/table';
//import { MatCellDef } from '@angular/material/table';

@Component({
  selector: 'app-index-pens',
  templateUrl: './index-pens.component.html',
  styleUrls: ['./index-pens.component.css']
})

export class IndexPensComponent implements OnInit {

  pens: penDTO[] = [
    {id:1, notes: "Default(Loading)"}
  ];
  displayedColumns: string[] = ['id','notes', 'actions'];
  totalAmountOfRecords: any;
  currentpage = 1;
  pageSize = 20;
  //dataSource = new MatTableDataSource(this.pens);
  constructor(private penService: penService, private router: Router) { }
  
  ngOnInit(): void {
    this.loadData();
  }


  loadData()
  {
    this.penService.get(this.currentpage, this.pageSize).subscribe((response: HttpResponse<penDTO[]>) =>
    {
      this.pens = response.body;
      this.totalAmountOfRecords = response.headers.get("totalAmountOfRecords");
      //console.log(response.headers.get("totalAmountOfRecords"));
      //console.log(this.pens.length);
      //console.log(this.pens[0]);
    }); 
  }
  delete(id:number)
  {
    
    this.penService.delete(id).subscribe(()=>{
      this.loadData();
      this.router.navigate(["/pens"]);
    });
    
  }
  updatePagination(event: PageEvent)
  {
    this.currentpage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }
}
