import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from '../config';
import { ORGANISATEUR } from './regres';

@Injectable({
  providedIn: 'root'
})
export class AgenceService {

  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });

    
    private ressource = `${baseUrl}/agence`
  
    constructor(private http: HttpClient) { }

    public userLogin(payload: any)  {
     
      //this.currentUser = payload.CLIENT;
      //console.log(this.currentUser)
      return this.http.post(`${this.ressource}/login`,payload);
      
    }
    findexcursion (data : string) {
      let params = new HttpParams()
      if(data) params = params.set('id',data)
      return this.http.get(`${this.ressource}/findpart/`,{params});

  }
    
    // public getCurrentUser(): ORGANISATEUR{
    //   return this.OR; // Here you get the current user.
    // }
    findOne() {
        return this.http.get(this.ressource)
    }
  

    
    findAll () {
      return this.http.get(this.ressource);
  }
    create(data: ORGANISATEUR): Observable<any> {
        return this.http.post<any>(this.ressource,data);
    }

    update(id: any, data: ORGANISATEUR){
        return this.http.put(`${this.ressource}/${id}`, data);
    }
    
        createNewUser(payload: any) {
          return this.http.post(`${this.ressource}/register`, payload);
        }
       
        getProtectedData() {
          return this.http.get(`${this.ressource}/data`);
        }
        registreNewUser (data: ORGANISATEUR): Observable<any> {
          return this.http.post<any>(this.ressource,data);
      }
      findemail(data : string){
        let params = new HttpParams()
        if(data) params = params.set('email',data)
        return this.http.get(`${this.ressource}/findemail/`,{params});

    }
    findemaill(data : string){
      let params = new HttpParams()
      if(data) params = params.set('email',data)
      return this.http.get(`${this.ressource}/findemaill/`,{params});

  }
    findClient(data : string) {
      let params = new HttpParams()
      if(data) params = params.set('id',data)
      return this.http.get(`${this.ressource}/find`,{params});

  }
    deletee(data:string){
      
      let params = new HttpParams()
      if(data) params = params.set('id',data)
      return this.http.delete(`${this.ressource}/delete`,{params});

  }
  removeexcursion(data:string,id:string): Observable<any> {
    let params = new HttpParams()
      if(data) params = params.set('idexcursion',data)
      return this.http.delete(`${this.ressource}/removeexcursion/${id}`,{params});}
    
   
 


    insert(data:any,_id:string) : Observable<any>  {
  let params = new HttpParams()
      if(data) params = params.set('excursions',data)
      return this.http.put(`${this.ressource}/insert/${_id}`,{params});}

    } 
    
