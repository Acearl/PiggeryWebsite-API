import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { penCreationDTO, penDTO } from './penDTOs.model';

@Injectable({
  providedIn: 'root'
})
export class penService {

  constructor(private http: HttpClient) { }

  private _apiURL = environment.apiURL + '/pens'

  get(page: number, recordsPerPage: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordsPerPage', recordsPerPage.toString());
    return this.http.get<penDTO[]>(this._apiURL, {observe: 'response', params});
  }

  getById(id: number): Observable<penDTO>{
    return this.http.get<penDTO>(`${this._apiURL}/${id}`);
  }

  create(pen: penCreationDTO){
    return this.http.post(this._apiURL, pen);
    console.log("hit");
  }

  edit(id: number, pen: penCreationDTO){
    return this.http.put(`${this._apiURL}/${id}`, pen);
  }

  delete(id: number) {
    return this.http.delete(`${this._apiURL}/${id}`);
  }
}