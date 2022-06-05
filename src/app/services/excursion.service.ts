import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EXCURSION } from './regres';
import { baseUrl } from '../config';
import { Observable } from 'rxjs';
import { idText } from 'typescript';

@Injectable({
    providedIn: 'root'
}) 
export class ExcursionService {
    private ressource = `${baseUrl}/excursion`
    constructor(private http: HttpClient) { }

    findAll () {
        return this.http.get(`${this.ressource}/findAll`);
    }
    
    findOne() {
        return this.http.get(this.ressource);
    }
  

    create(data: EXCURSION): Observable<any> {

        return this.http.post<any>(this.ressource,data);
    }

    findOrganisateur(data:string) {
        let params = new HttpParams()
        if(data) params = params.set('idorg',data)
        return this.http.get(`${this.ressource}/findorg/`,{params});


    }
    update(id: any, data: EXCURSION){
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
        return this.http.get(`${this.ressource}/find/`,{params});

    }
    findpart (data : string) {
        let params = new HttpParams()
        if(data) params = params.set('id',data)
        return this.http.get(`${this.ressource}/findpart/`,{params});

    }
    deletee(data:string){
      
        let params = new HttpParams()
        if (data) params = params.set('_id',data)
        return this.http.delete(`${this.ressource}/delete`,{params});
  
    }}
  

