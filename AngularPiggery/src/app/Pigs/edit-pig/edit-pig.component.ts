import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { pigCreationDTO, pigDTO } from '../pigDTOs.model';
import { pigService } from '../pig-service.service';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-edit-pig',
  templateUrl: './edit-pig.component.html',
  styleUrls: ['./edit-pig.component.css']
})
export class EditPigComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private pigService: pigService,
    private router: Router) { }

  model: pigDTO;
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.pigService.getById(params.id).subscribe(pig => {
        this.model = pig;
      })
    });
  }

  saveChanges(pigCreationDTO: pigCreationDTO)
  {
    // console.log(this.model.id);
    // console.log(expenseCreationDTO.cost);
    // console.log(expenseCreationDTO.date);
    // console.log(expenseCreationDTO.notes);
    this.pigService.edit(this.model.id, pigCreationDTO).subscribe(()=>
    {this.router.navigate(["/pigs"])});
  }
}
