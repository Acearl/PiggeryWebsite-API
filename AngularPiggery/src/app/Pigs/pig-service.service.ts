import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { pigCreationDTO, pigDTO } from './pigDTOs.model';

@Injectable({
  providedIn: 'root'
})
export class pigService {

  constructor(private http: HttpClient) { }

  private _apiURL = environment.apiURL + '/pigs'

  get(page: number, recordsPerPage: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordsPerPage', recordsPerPage.toString());
    return this.http.get<pigDTO[]>(this._apiURL, {observe: 'response', params});
  }

  getById(id: number): Observable<pigDTO>{
    return this.http.get<pigDTO>(`${this._apiURL}/${id}`);
  }

  create(pig: pigCreationDTO){
    return this.http.post(this._apiURL, pig);
  }

  edit(id: number, pig: pigCreationDTO){
    return this.http.put(`${this._apiURL}/${id}`, pig);
  }

  delete(id: number) {
    return this.http.delete(`${this._apiURL}/${id}`);
  }
}