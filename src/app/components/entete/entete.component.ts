import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormControlName, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { AgenceService } from 'src/app/services/agence.service';
import { ClientService } from 'src/app/services/client.service';
import { OrganisateuramateurService } from 'src/app/services/organistaeur-amateur.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { AuthService } from 'src/_services/auth.service';
import { TokenStorageService } from 'src/_services/token-storage.service';


@Component({
  selector: 'app-entete',
  templateUrl: './entete.component.html',
  styleUrls: ['./entete.component.css']
})
export class EnteteComponent implements OnInit {
  title = 'appBootstrap';
  currentuser: any;

  closeResult: string;
  email:any
  loginForm: FormGroup;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role: string[] = [];
 _id:any
  erreur=0
  formcontrol: FormControl
  constructor(private agenceService: AgenceService,private organisateurService:OrganisateuramateurService,private clientservice:ClientService,private tokenStorageService: TokenStorageService,private authService: AuthService, private tokenStorage: TokenStorageService,private modalService: NgbModal,private router: Router,private fb :FormBuilder,private clientService:ClientService ,private userAuthService:UserAuthService) { 
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      mdp: new FormControl('')
    });
  }
 
  login() {
   // console.log(loginForm.value);
   this.authService.userLogin(this.form).subscribe(
    (data: any) => {

      this.tokenStorage.saveToken(data.token);
      this.tokenStorage.saveUser(data);

      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getUser().role;
      this.reloadPage();
      
    },
    err => {
      this.errorMessage = err.error.message;
      this.isLoginFailed = true;
    }
  );
  }

 

  reloadPage() {
    window.location.reload();
  }

  open(content: any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
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
  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getUser().role;
      this.currentuser = this.tokenStorage.getUser();
      if (this.currentuser.role =="client") {
     this.clientService.findemail(this.currentuser.email).subscribe(res=>{
this._id=res
     })}
     else if  (this.currentuser.role=='organisateur_amateur') {
      this.organisateurService.findemail(this.currentuser.email).subscribe(res=>{
        this._id=res
             })
     }
     else if(this.currentuser.role=='agence'){
      this.agenceService.findemail(this.currentuser.email).subscribe(res=>{
        this._id=res
        console.log(this._id)
             })
     }
console.log(this.currentuser._id)

     
   }
  }

 panier(){
  this.router.navigate(['panier', this._id]);
 }
  listeexcursion(){this.router.navigate(['liste_excursion']);}
  excursioncli () {this.router.navigate(['liste_exc_client', this._id]);}
  excursionag(){this.router.navigate(['liste_excursion', this._id]);}
  listebus(){this.router.navigate(['liste_bus']);}
  listebusannule(){this.router.navigate(['listebusrese',this._id]);}

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
 }
      
