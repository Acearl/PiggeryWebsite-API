import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { penService } from '../pen-service.service';
import { penCreationDTO } from '../penDTOs.model';

@Component({
  selector: 'app-create-pen',
  templateUrl: './create-pen.component.html',
  styleUrls: ['./create-pen.component.css']
})
export class CreatePenComponent implements OnInit {

  constructor(private router:Router, private penService: penService) { }

  ngOnInit(): void {
  }

  saveChanges(penCreationDTO: penCreationDTO){
    this.penService.create(penCreationDTO).subscribe(() =>{
      this.router.navigate(['/pens']);
      console.log(penCreationDTO.notes);
    });
  }
}
