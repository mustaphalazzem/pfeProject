import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { FormBuilder, FormsModule, NgForm } from '@angular/forms' 
import { MatSnackBar } from '@angular/material/snack-bar';

import { ReactiveFormsModule} from '@angular/forms' 
import {FormGroup, FormControl, Validators} from '@angular/forms'

import { Component, NgModule, OnInit } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { CLIENT, USER } from 'src/app/services/regres';
import { UserAuthService } from 'src/app/services/user-auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'appBootstrap';
 
  closeResult: string;
   loginForm: FormGroup;
   erreur=0
 
  submitted=false 
  
  constructor(private client :ClientService,
    private http:HttpClient,private modalService: NgbModal,private router: Router ,private fb :FormBuilder, private user: ClientService,private userAuthService:UserAuthService) {
      this.loginForm = this.fb.group({
        email: ["",Validators.required],
        mdp: ["",Validators.required],
        

      })
     
    
     }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

 ///
    
  
//  login(loginForm: NgForm) {
//   this.user.userLogin(loginForm.value).subscribe(
//     (response: any) => {
//       this.userAuthService.setToken(response.jwtToken);
//       this.router.navigate(['/confirmation']);
//     },
//     (erreur) => {
//       this.erreur=1;
//     }
//   );
// }
    
  ngOnInit(): void {
    }
  
  
  }