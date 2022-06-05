import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ORGANISATEUR } from './regres';
import { baseUrl } from '../config';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'any'
}) 
export class OrganisateurService {
    private ressource = `${baseUrl}/organisateur_amateur`
    private url = `${baseUrl}/agence`


    constructor(private http: HttpClient) { }
    findOne() {
        return this.http.get(this.ressource);
    }

    create(data: any): Observable<any> {
        return this.http.post<any>(this.ressource,data);
    }
    createagence(data: any): Observable<any> {
        return this.http.post<any>(this.url,data);
    }

    update(id: any, data: ORGANISATEUR){
        return this.http.put(`${this.ressource}/${id}`, data);
    }
    uploadFile(id:string,data:FormData){
        return this.http.post(`${this.ressource}/${id}/upload/`,data)
    }

}
