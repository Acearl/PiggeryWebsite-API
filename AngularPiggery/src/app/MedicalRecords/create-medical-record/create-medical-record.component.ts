import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { medicalRecordService } from '../medical-record-service.service';
import { medicalRecordCreationDTO } from '../medicalRecordDTOs.model';

@Component({
  selector: 'app-create-medical-record',
  templateUrl: './create-medical-record.component.html',
  styleUrls: ['./create-medical-record.component.css']
})
export class CreateMedicalRecordComponent implements OnInit {

  constructor(private router:Router, private medicalRecordService: medicalRecordService) { }

  ngOnInit(): void {
  }

  saveChanges(medicalRecordCreationDTO: medicalRecordCreationDTO){
    this.medicalRecordService.create(medicalRecordCreationDTO).subscribe(() =>{
      this.router.navigate(['/medical-records']);
    });
  }
}
