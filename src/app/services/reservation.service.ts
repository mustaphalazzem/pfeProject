import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RESERVATION } from './regres';
import { baseUrl } from '../config';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  private ressource = `${baseUrl}/reservation` ;
  constructor(private http: HttpClient) { }

  findAll () {
      return this.http.get(`${this.ressource}/findAll`);
  }

  create(data: RESERVATION): Observable<any> {

      return this.http.post<any>(this.ressource,data);
  }
  

  update(id: any, data: RESERVATION){
      return this.http.put(`${this.ressource}/${id}`, data);
  }
 
  
 
  findOne (data : string) {
      let params = new HttpParams()
      if(data) params = params.set('id',data)
      return this.http.get(`${this.ressource}/find`,{params});

  }
 
  deletee(data:string){
    
      let params = new HttpParams()
      if(data) params = params.set('id',data)
      return this.http.delete(`${this.ressource}/delete`,{params});

  }
}
