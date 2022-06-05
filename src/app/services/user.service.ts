import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../config';
import { USER } from './regres';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private ressource = `${baseUrl}/users`
  constructor(private http: HttpClient) { }
  
  createc(data: USER): Observable<any> {

    return this.http.post<any>(`${this.ressource}/client`,data);
}
createagence(data: USER): Observable<any> {

  return this.http.post<any>(`${this.ressource}/agence`,data);
}
createadmin(data: USER): Observable<any> {

  return this.http.post<any>(`${this.ressource}/register-admin`,data);
}
createorganisateur(data: USER): Observable<any> {

  return this.http.post<any>(`${this.ressource}/organisateur_amateur`,data);
}


}
