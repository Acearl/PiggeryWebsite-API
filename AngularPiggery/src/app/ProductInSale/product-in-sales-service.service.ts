import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { productInSaleCreationDTO, productInSaleDTO } from './productInSaleDTOs.model';

@Injectable({
  providedIn: 'root'
})
export class ProductInSaleService {

  constructor(private http: HttpClient) { }

  private _apiURL = environment.apiURL + '/product-in-sales'

  get(page: number, recordsPerPage: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordsPerPage', recordsPerPage.toString());
    return this.http.get<productInSaleDTO[]>(this._apiURL, {observe: 'response', params});
  }

  getById(id: number): Observable<productInSaleDTO>{
    return this.http.get<productInSaleDTO>(`${this._apiURL}/${id}`);
  }

  create(productInSale: productInSaleCreationDTO){
    return this.http.post(this._apiURL, productInSale);
  }

  edit(id: number, productInSale: productInSaleCreationDTO){
    return this.http.put(`${this._apiURL}/${id}`, productInSale);
  }

  delete(id: number) {
    return this.http.delete(`${this._apiURL}/${id}`);
  }
}