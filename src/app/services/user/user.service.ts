import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/app/config';
import { UserAuthService } from '../user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  requestHeader = new HttpHeaders({ 'No-Auth': 'True' });
  private ressource = `${baseUrl}/users`
  constructor(private httpclient:HttpClient,private userAuthService:UserAuthService) { }
  public login(loginData:any){
    return this.httpclient.post(`${this.ressource}/login`,loginData,{headers:this.requestHeader},)
  }

// public roleMatch(allowedRoles):boolean{
//   let isMatch:boolean=false;
//   const userRoles : any=this.userAuthService.getRoles();
//   if(userRoles !=null && userRoles){
//     for(let i=0;i<userRoles.length;i++){
//       for(let j=0;j<allowedRoles.length;j++){
//         if(userRoles[i].roleName==allowedRoles[j]){
//           isMatch=true;
//           return isMatch;
//         }else{
//           return isMatch
//         }
//       }
//     }
//   }
// }
}