import { Component, OnInit } from '@angular/core';
import { weightRecordDTO } from '../weightRecordDTOs.model';
import { ActivatedRoute, Router } from '@angular/router';
import { weightRecordCreationDTO } from '../weightRecordDTOs.model';
import { weightRecordService } from '../weight-record-service.service';
import { DatePipe } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
//import { MatTable } from '@angular/material/table';
//import { MatCell } from '@angular/material/table';
//import { MatCellDef } from '@angular/material/table';

@Component({
  selector: 'app-index-weight-records',
  templateUrl: './index-weight-records.component.html',
  styleUrls: ['./index-weight-records.component.css']
})

export class IndexWeightRecordsComponent implements OnInit {

  weightRecords: weightRecordDTO[] = [
    
  ];
  displayedColumns: string[] = ['id','pigID', 'dateWeighed','weightKG','actions'];
  totalAmountOfRecords: any;
  currentpage = 1;
  pageSize = 20;
  //dataSource = new MatTableDataSource(this.weightRecords);
  constructor(private weightRecordService: weightRecordService, private router: Router) { }
  
  ngOnInit(): void {
    this.loadData();
  }


  loadData()
  {
    this.weightRecordService.get(this.currentpage, this.pageSize).subscribe((response: HttpResponse<weightRecordDTO[]>) =>
    {
      this.weightRecords = response.body;
      this.totalAmountOfRecords = response.headers.get("totalAmountOfRecords");
      //console.log(response.headers.get("totalAmountOfRecords"));
      console.log(this.weightRecords[0]);
    }); 
  }
  delete(id:number)
  {
    
    this.weightRecordService.delete(id).subscribe(()=>{
      this.loadData();
      this.router.navigate(["/weight-records"]);
    });
    
  }
  updatePagination(event: PageEvent)
  {
    this.currentpage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }
}
