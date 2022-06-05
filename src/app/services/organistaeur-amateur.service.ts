import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ORGANISATEUR } from './regres';
import { baseUrl } from '../config';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
}) 
export class OrganisateuramateurService {
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

    
    private ressource = `${baseUrl}/organisateur_amateur`
    constructor(private http: HttpClient) { }
    findOne() {
        return this.http.get(this.ressource);
    }

    create(data: ORGANISATEUR): Observable<any> {
        return this.http.post<any>(this.ressource,data);
    }

    update(id: any, data: ORGANISATEUR){
        return this.http.put(`${this.ressource}/${id}`, data);
    }
    findemail(data : string){
      let params = new HttpParams()
      if(data) params = params.set('email',data)
      return this.http.get(`${this.ressource}/findemail/`,{params});

  }
        createNewUser(payload: any) {
          return this.http.post(`${this.ressource}/register`, payload);
        }
        userLogin(payload: any) {
          return this.http.post(`${this.ressource}/login`,payload,{headers:this.requestHeader});
        }
        getProtectedData() {
          return this.http.get(`${this.ressource}/data`);
        }
        registreNewUser (data: ORGANISATEUR): Observable<any> {
          return this.http.post<any>(this.ressource,data);
      }
      findMail(data : string) {
        let params = new HttpParams()
        if(data) params = params.set('mail',data)
        return this.http.get(`${this.ressource}/find`,{params});

    }
    }