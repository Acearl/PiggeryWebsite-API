import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { saleCreationDTO, saleDTO } from './saleDTOs.model';

@Injectable({
  providedIn: 'root'
})
export class saleService {

  constructor(private http: HttpClient) { }

  private _apiURL = environment.apiURL + '/sales'

  get(page: number, recordsPerPage: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordsPerPage', recordsPerPage.toString());
    return this.http.get<saleDTO[]>(this._apiURL, {observe: 'response', params});
  }

  getById(id: number): Observable<saleDTO>{
    return this.http.get<saleDTO>(`${this._apiURL}/${id}`);
  }

  create(sale: saleCreationDTO){
    return this.http.post(this._apiURL, sale);
  }

  edit(id: number, sale: saleCreationDTO){
    return this.http.put(`${this._apiURL}/${id}`, sale);
  }

  delete(id: number) {
    return this.http.delete(`${this._apiURL}/${id}`);
  }
}