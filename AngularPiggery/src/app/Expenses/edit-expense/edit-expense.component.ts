import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { expenseCreationDTO, expenseDTO } from '../expenseDTOs.model';
import { expenseService } from '../expense-service.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
@Component({
  selector: 'app-edit-expense',
  templateUrl: './edit-expense.component.html',
  styleUrls: ['./edit-expense.component.css']
})
export class EditExpenseComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private expenseService: expenseService,
    private router: Router) { }

  model: expenseDTO;
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.expenseService.getById(params.id).subscribe(expense => {
        this.model = expense;
      })
    });
  }

  saveChanges(expenseCreationDTO: expenseCreationDTO)
  {
    // console.log(this.model.id);
    // console.log(expenseCreationDTO.cost);
    // console.log(expenseCreationDTO.date);
    // console.log(expenseCreationDTO.notes);
    this.expenseService.edit(this.model.id, expenseCreationDTO).subscribe(()=>
    {this.router.navigate(["/expenses"])});
  }

}
