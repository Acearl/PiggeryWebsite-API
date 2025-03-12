import { Component, OnInit } from '@angular/core';
import { medicalRecordDTO } from '../medicalRecordDTOs.model';
import { ActivatedRoute, Router } from '@angular/router';
import { medicalRecordCreationDTO } from '../medicalRecordDTOs.model';
import { medicalRecordService } from '../medical-record-service.service';
import { DatePipe } from '@angular/common';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';
//import { MatTable } from '@angular/material/table';
//import { MatCell } from '@angular/material/table';
//import { MatCellDef } from '@angular/material/table';

@Component({
  selector: 'app-index-medical-records',
  templateUrl: './index-medical-records.component.html',
  styleUrls: ['./index-medical-records.component.css']
})

export class IndexMedicalRecordsComponent implements OnInit {

  medicalRecords: medicalRecordDTO[] = [
    //{id:1,date: Date.now().toString(), cost: 20, notes: "Default(Loading)"}
  ];
  displayedColumns: string[] = ['id','pigID', 'date','notes', 'actions'];
  totalAmountOfRecords: any;
  currentpage = 1;
  pageSize = 20;
  //dataSource = new MatTableDataSource(this.medicalRecords);
  constructor(private medicalRecordService: medicalRecordService, private router: Router) { }
  
  ngOnInit(): void {
    this.loadData();
  }


  loadData()
  {
    this.medicalRecordService.get(this.currentpage, this.pageSize).subscribe((response: HttpResponse<medicalRecordDTO[]>) =>
    {
      this.medicalRecords = response.body;
      this.totalAmountOfRecords = response.headers.get("totalAmountOfRecords");
      //console.log(response.headers.get("totalAmountOfRecords"));
      //console.log(this.medicalRecords.length);
      //console.log(this.medicalRecords);
    }); 
  }
  delete(id:number)
  {
    
    this.medicalRecordService.delete(id).subscribe(()=>{
      this.loadData();
      this.router.navigate(["/medical-records"]);
    });
    
  }
  updatePagination(event: PageEvent)
  {
    this.currentpage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadData();
  }
}
