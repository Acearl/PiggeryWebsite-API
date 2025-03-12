import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { expenseCreationDTO, expenseDTO } from './expenseDTOs.model';

@Injectable({
  providedIn: 'root'
})
export class expenseService {

  constructor(private http: HttpClient) { }

  private _apiURL = environment.apiURL + '/expenses'

  get(page: number, recordsPerPage: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordsPerPage', recordsPerPage.toString());
    return this.http.get<expenseDTO[]>(this._apiURL, {observe: 'response', params});
  }

  getById(id: number): Observable<expenseDTO>{
    return this.http.get<expenseDTO>(`${this._apiURL}/${id}`);
  }

  create(expense: expenseCreationDTO){
    return this.http.post(this._apiURL, expense);
  }

  edit(id: number, expense: expenseCreationDTO){
    return this.http.put(`${this._apiURL}/${id}`, expense);
  }

  delete(id: number) {
    return this.http.delete(`${this._apiURL}/${id}`);
  }
}