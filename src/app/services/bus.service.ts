import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BUS, EXCURSION } from './regres';
import { baseUrl } from '../config';


@Injectable({
  providedIn: 'root'
})

export class BusService {
  private ressource = `${baseUrl}/bus` ;
  constructor(private http: HttpClient) { }

  findAll () {
      return this.http.get(`${this.ressource}/findAll`);
  }

  create(data: any) {
    return this.http.post(this.ressource,data);
  }
  

  update(id: any, data: BUS){
      return this.http.put(`${this.ressource}/${id}`, data);
  }
 
  
 
  findOne (data : string) {
      let params = new HttpParams()
      if(data) params = params.set('id',data)
      return this.http.get(`${this.ressource}/find`,{params});

  }
  findreserv (data : string) {
    let params = new HttpParams()
    if(data) params = params.set('idagence',data)
    return this.http.get(`${this.ressource}/findreserv/`,{params});

}
 idlouer (data:EXCURSION){     
    return this.http.put(`${this.ressource}/louer/`, data);
}
  
 
 deletee(data:string){
    
      let params = new HttpParams()
      if(data) params = params.set('id',data)
      return this.http.delete(`${this.ressource}/delete`,{params})

  }
}
 