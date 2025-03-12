import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { pigService } from '../pig-service.service';
import { pigCreationDTO } from '../pigDTOs.model';
@Component({
  selector: 'app-create-pig',
  templateUrl: './create-pig.component.html',
  styleUrls: ['./create-pig.component.css']
})
export class CreatePigComponent implements OnInit {

  constructor(private router:Router, private pigService: pigService) { }

  ngOnInit(): void {
  }

  saveChanges(pigCreationDTO: pigCreationDTO){
    this.pigService.create(pigCreationDTO).subscribe(() =>{
      this.router.navigate(['/pigs']);
    });
  }

}
