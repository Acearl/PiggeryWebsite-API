import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { expenseService } from '../expense-service.service';
import { expenseCreationDTO } from '../expenseDTOs.model';

@Component({
  selector: 'app-create-expense',
  templateUrl: './create-expense.component.html',
  styleUrls: ['./create-expense.component.css']
})
export class CreateExpenseComponent implements OnInit {

  constructor(private router:Router, private expenseService: expenseService) { }

  ngOnInit(): void {
  }

  saveChanges(expenseCreationDTO: expenseCreationDTO){
    this.expenseService.create(expenseCreationDTO).subscribe(() =>{
      this.router.navigate(['/expenses']);
    });
  }
}
