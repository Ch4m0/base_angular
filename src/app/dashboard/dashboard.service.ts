import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from './pages/edit-patient/patient';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private REST_API_SERVER = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  /* Get list patients */
  public getPatients() {
    return this.httpClient.get(`${this.REST_API_SERVER}/pacientes`);
  }
/*Post cerate patients*/
  public postPatients(data:any) {
    return this.httpClient.post(`${this.REST_API_SERVER}/pacientes`, data);
  }

  /*delete patients*/

  public deletePatients(id:any) {
    return this.httpClient.delete(`${this.REST_API_SERVER}/pacientes/`+ id);
  }
  /* Get patient */
  public getPatient(id: number) {
    return this.httpClient.get(`${this.REST_API_SERVER}/pacientes/${id}`);
  }
  /* Update patient*/
  public updatePatient(id: number, data: Patient) {
    return this.httpClient.put(`${this.REST_API_SERVER}/pacientes/${id}`, data);
  }
}
