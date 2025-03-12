import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { productInSaleCreationDTO, productInSaleDTO } from '../productInSaleDTOs.model';
import { ProductInSaleService } from '../product-in-sales-service.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
@Component({
  selector: 'app-edit-product-in-sale',
  templateUrl: './edit-product-in-sale.component.html',
  styleUrls: ['./edit-product-in-sale.component.css']
})
export class EditProductInSaleComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private ProductInSaleService: ProductInSaleService,
    private router: Router) { }

  model: productInSaleDTO;
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.ProductInSaleService.getById(params.id).subscribe(productInSale => {
        this.model = productInSale;
      })
    });
  }

  saveChanges(productInSaleCreationDTO: productInSaleCreationDTO)
  {
    // console.log(this.model.id);
    // console.log(productInSaleCreationDTO.cost);
    // console.log(productInSaleCreationDTO.date);
    // console.log(productInSaleCreationDTO.notes);
    this.ProductInSaleService.edit(this.model.id, productInSaleCreationDTO).subscribe(()=>
    {this.router.navigate(["/product-in-sales"])});
  }

}
