import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { medicalRecordCreationDTO, medicalRecordDTO } from '../medicalRecordDTOs.model';
import { medicalRecordService } from '../medical-record-service.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
@Component({
  selector: 'app-edit-medical-record',
  templateUrl: './edit-medical-record.component.html',
  styleUrls: ['./edit-medical-record.component.css']
})
export class EditMedicalRecordComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private medicalRecordService: medicalRecordService,
    private router: Router) { }

  model: medicalRecordDTO;
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.medicalRecordService.getById(params.id).subscribe(medicalRecord => {
        this.model = medicalRecord;
      })
    });
  }

  saveChanges(medicalRecordCreationDTO: medicalRecordCreationDTO)
  {
    // console.log(this.model.id);
    // console.log(medicalRecordCreationDTO.cost);
    // console.log(medicalRecordCreationDTO.date);
    // console.log(medicalRecordCreationDTO.notes);
    this.medicalRecordService.edit(this.model.id, medicalRecordCreationDTO).subscribe(()=>
    {this.router.navigate(["/medical-records"])});
  }

}
