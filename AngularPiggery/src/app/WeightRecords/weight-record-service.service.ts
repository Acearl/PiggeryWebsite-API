import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { weightRecordCreationDTO, weightRecordDTO } from './weightRecordDTOs.model';

@Injectable({
  providedIn: 'root'
})
export class weightRecordService {

  constructor(private http: HttpClient) { }

  private _apiURL = environment.apiURL + '/weight-records'

  get(page: number, recordsPerPage: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordsPerPage', recordsPerPage.toString());
    return this.http.get<weightRecordDTO[]>(this._apiURL, {observe: 'response', params});
  }

  getById(id: number): Observable<weightRecordDTO>{
    return this.http.get<weightRecordDTO>(`${this._apiURL}/${id}`);
  }

  create(weightRecord: weightRecordCreationDTO){
    return this.http.post(this._apiURL, weightRecord);
  }

  edit(id: number, weightRecord: weightRecordCreationDTO){
    return this.http.put(`${this._apiURL}/${id}`, weightRecord);
  }

  delete(id: number) {
    return this.http.delete(`${this._apiURL}/${id}`);
  }
}