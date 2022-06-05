import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../config';
import { NONEXCURSION } from './regres';

@Injectable({
  providedIn: 'root'
})
export class NonexcursionService {

  private ressource = `${baseUrl}/nonexcursion`
  constructor(private http: HttpClient) { }

  findAll () {
      return this.http.get(`${this.ressource}/findAll`);
  }
  
  findOne() {
      return this.http.get(this.ressource);
  }


  create(data: NONEXCURSION): Observable<any> {

      return this.http.post<any>(this.ressource,data);
  }
  findid (data:string) {
      let params = new HttpParams()
      if(data) params = params.set('idorg',data)
      return this.http.get(`${this.ressource}/findidorg`,{params});


  }

  update(id: any, data: NONEXCURSION){
      return this.http.put(`${this.ressource}/${id}`, data);
  }
  findDest(data: string) {
      let params = new HttpParams()
      if(data) params = params.set('destination',data)
      return this.http.get(`${this.ressource}/dest`,{params});
  }
  findAtDate (dat : number) {
      let params = new HttpParams()
      if(dat) params = params.set('date',dat)
      return this.http.get(`${this.ressource}/date`,{params});

  }
  
  triercroissant () {
      return this.http.get(`${this.ressource}/croissant`);
  }
  trierdecroissant () {
      return this.http.get(`${this.ressource}/decroissant`);
  }
  findExcursion (data : string) {
      let params = new HttpParams()
      if(data) params = params.set('id',data)
      return this.http.get(`${this.ressource}/find`,{params});

  }
  findpart (data : string) {
      let params = new HttpParams()
      if(data) params = params.set('id',data)
      return this.http.get(`${this.ressource}/findpart/`,{params});

  }
  deletee(data:string){
    
      let params = new HttpParams()
      if(data) params = params.set('id',data)
      return this.http.delete(`${this.ressource}/delete`,{params});

  }


}
