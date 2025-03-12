import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { medicalRecordCreationDTO, medicalRecordDTO } from './medicalRecordDTOs.model';

@Injectable({
  providedIn: 'root'
})
export class medicalRecordService {

  constructor(private http: HttpClient) { }

  private _apiURL = environment.apiURL + '/medical-records'

  get(page: number, recordsPerPage: number): Observable<any>{
    let params = new HttpParams();
    params = params.append('page', page.toString());
    params = params.append('recordsPerPage', recordsPerPage.toString());
    return this.http.get<medicalRecordDTO[]>(this._apiURL, {observe: 'response', params});
  }

  getById(id: number): Observable<medicalRecordDTO>{
    return this.http.get<medicalRecordDTO>(`${this._apiURL}/${id}`);
  }

  create(medicalRecord: medicalRecordCreationDTO){
    return this.http.post(this._apiURL, medicalRecord);
  }

  edit(id: number, medicalRecord: medicalRecordCreationDTO){
    return this.http.put(`${this._apiURL}/${id}`, medicalRecord);
  }

  delete(id: number) {
    return this.http.delete(`${this._apiURL}/${id}`);
  }
}