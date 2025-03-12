import { Component, OnInit } from '@angular/core';
import { pigDTO } from '../pigDTOs.model';
import { ActivatedRoute, Router } from '@angular/router';
import { pigCreationDTO } from '../pigDTOs.model';
import { pigService } from '../pig-service.service';
import { DatePipe } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
//import { MatTable } from '@angular/material/table';
//import { MatCell } from '@angular/material/table';
//import { MatCellDef } from '@angular/material/table';

@Component({
  selector: 'app-index-pigs',
  templateUrl: './index-pigs.component.html',
  styleUrls: ['./index-pigs.component.css']
})

export class IndexPigsComponent implements OnInit {

  pigs: pigDTO[] = [
    //{id:1, notes: "Default(Loading)"}
  ];
  displayedColumns: string[] = ['id','birthDate','castrationStatus','designation','fatherID','motherID','notes','pen','sex','status','actions'];
  totalAmountOfRecords: any;
  currentpage = 1;
  pageSize = 20;
  //dataSource = new MatTableDataSource(this.pigs);
  constructor(private pigService: pigService, private router: Router) { }
  
  ngOnInit(): void {
    this.loadData();
  }


  loadData()
  {
    this.pigService.get(this.currentpage, this.pageSize).subscribe((response: HttpResponse<pigDTO[]>) =>
    {
      this.pigs = response.body;
      this.totalAmountOfRecords = response.headers.get("totalAmountOfRecords");
      console.log(response.headers.get("totalAmountOfRecords"));
      console.log(this.pigs.length);
      console.log(this.pigs[0]);
    }); 
  }
  delete(id:number)
  {
    
    this.pigService.delete(id).subscribe(()=>{
      this.loadData();
      this.router.navigate(["/pigs"]);
    });
    
  }
  updatePagination(event: PageEvent)
  {
    this.currentpage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }
}
