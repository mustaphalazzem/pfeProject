import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { PANIER } from './regres';
import { baseUrl } from '../config';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
}) 
export class PanierService {
    private ressource = `${baseUrl}/panier`
    constructor(private http: HttpClient) { }
    
    findPanier(data: string) {
        let params = new HttpParams()
        if(data) params = params.set('idclient',data)
        return this.http.get(`${this.ressource}/findpanier/`,{params});
    }
    findAll () {
        return this.http.get(this.ressource);
    }
    create(data: PANIER ): Observable<any> {
        return this.http.post<any>(this.ressource,data);
    }
    deletee(data:string) {
        let params = new HttpParams();
        if(data) params = params.set('idexcursion',data)
        return this.http.delete(`${this.ressource}/deletee/`,{params})
    }
}

