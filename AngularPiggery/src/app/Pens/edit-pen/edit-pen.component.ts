import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { penCreationDTO, penDTO } from '../penDTOs.model';
import { penService } from '../pen-service.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
@Component({
  selector: 'app-edit-pen',
  templateUrl: './edit-pen.component.html',
  styleUrls: ['./edit-pen.component.css']
})
export class EditPenComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private penService: penService,
    private router: Router) { }

  model: penDTO;
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.penService.getById(params.id).subscribe(pen => {
        this.model = pen;
      })
    });
  }

  saveChanges(penCreationDTO: penCreationDTO)
  {
    // console.log(this.model.id);
    // console.log(penCreationDTO.cost);
    // console.log(penCreationDTO.date);
    // console.log(penCreationDTO.notes);
    this.penService.edit(this.model.id, penCreationDTO).subscribe(()=>
    {this.router.navigate(["/pens"])});
  }

}
