import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { weightRecordService } from '../weight-record-service.service';
import { weightRecordCreationDTO } from '../weightRecordDTOs.model';

@Component({
  selector: 'app-create-weight-record',
  templateUrl: './create-weight-record.component.html',
  styleUrls: ['./create-weight-record.component.css']
})
export class CreateWeightRecordComponent implements OnInit {

  constructor(private router:Router, private weightRecordService: weightRecordService) { }

  ngOnInit(): void {
  }

  saveChanges(weightRecordCreationDTO: weightRecordCreationDTO){
    this.weightRecordService.create(weightRecordCreationDTO).subscribe(() =>{
      this.router.navigate(['/weight-records']);
    });
  }
}
