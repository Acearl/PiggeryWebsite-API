import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductInSaleService } from '../product-in-sales-service.service';
import { productInSaleCreationDTO } from '../productInSaleDTOs.model';

@Component({
  selector: 'app-create-productInSale',
  templateUrl: './create-product-in-sale.component.html',
  styleUrls: ['./create-product-in-sale.component.css']
})
export class CreateProductInSaleComponent implements OnInit {

  constructor(private router:Router, private ProductInSaleService: ProductInSaleService) { }

  ngOnInit(): void {
  }

  saveChanges(productInSaleCreationDTO: productInSaleCreationDTO){
    this.ProductInSaleService.create(productInSaleCreationDTO).subscribe(() =>{
      this.router.navigate(['/product-in-sales']);
    });
  }
}
