import { Injectable } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
const TOKEN_KEY = 'jwtToken';
const USER_KEY = 'auth-user';
@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor(private clientservice : ClientService) { }
  _id:string
  signOut() {
    window.localStorage.clear();
  }
  public saveToken(jwtToken: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, jwtToken);
  }
  public getToken(): string {
    return localStorage.getItem(TOKEN_KEY);
  }
  public saveUser(user) {
    window.localStorage.removeItem(USER_KEY);
    const _id=this.clientservice.findemail(user.email)
    
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
    
  }
  public getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
     
      return JSON.parse(user);
      
    }
    return {};
  }
  public roleMatch(allowedRoles):boolean{
    var isMatch = false;
    var userRoles: string[] = JSON.parse(this.getUser().role);
    allowedRoles.forEach(element => {
      if (userRoles.indexOf(element) > -1) {
        isMatch = true;
        return false;
      }
    });
    return isMatch;
  }}