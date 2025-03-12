import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { weightRecordCreationDTO, weightRecordDTO } from '../weightRecordDTOs.model';
import { weightRecordService } from '../weight-record-service.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
@Component({
  selector: 'app-edit-weight-record',
  templateUrl: './edit-weight-record.component.html',
  styleUrls: ['./edit-weight-record.component.css']
})
export class EditWeightRecordComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private weightRecordService: weightRecordService,
    private router: Router) { }

  model: weightRecordDTO;
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.weightRecordService.getById(params.id).subscribe(weightRecord => {
        this.model = weightRecord;
      })
    });
  }

  saveChanges(weightRecordCreationDTO: weightRecordCreationDTO)
  {
    // console.log(this.model.id);
    // console.log(expenseCreationDTO.cost);
    // console.log(expenseCreationDTO.date);
    // console.log(expenseCreationDTO.notes);
    this.weightRecordService.edit(this.model.id, weightRecordCreationDTO).subscribe(()=>
    {this.router.navigate(["/weight-records"])});
  }

}
