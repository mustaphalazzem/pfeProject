import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { ExcursionService } from 'src/app/services/excursion.service';
import { EXCURSION } from 'src/app/services/regres';
import { TokenStorageService } from 'src/_services/token-storage.service';
import { OrganisateuramateurService } from 'src/app/services/organistaeur-amateur.service';
import { AgenceService } from 'src/app/services/agence.service';


@Component({
  selector: 'app-ajouter-excursion',
  templateUrl: './ajouter-excursion.component.html',
  styleUrls: ['./ajouter-excursion.component.css']
})
export class AjouterExcursionComponent implements OnInit {
  idorg:any


  excursion:EXCURSION= {
    _id:'',
    nom_exc: '', 
    destination: '',
    depart_exc: '',
    prix: null,
    date_depart: new Date(),
    date_fin: new Date(),
    photos:'',
    client:null,
    idorg :'',
  
   
  };
  id:any
  currentuser: any;
  _id:any
  closeResult: string;
  email:any
  loginForm: FormGroup;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  role: string[] = [];

  submitted = false;
  excursionForm:FormGroup
  loggedUserID : string;
  constructor(private agenceService : AgenceService ,private tokenStorage : TokenStorageService ,private organisateurService : OrganisateuramateurService ,private excursionService: ExcursionService,private fb :FormBuilder, private Clientservice:ClientService ,private router:Router) { 
    this.excursionForm = this.fb.group({
      nom: ['',Validators.required],
      destination: ['',Validators.required],
      depart: ['',Validators.required],
      prix: ['',Validators.required],
      date_depart: ['',Validators.required],
      date_fin: ['',Validators.required],
      // idorg: ['',Validators.required],

    })
   }

  ngOnInit(): void {
   // set the loggedUserID.

  }
  saveexcursion() {
    this.submitted = true
    if(this.excursionForm.invalid){
      return
    }
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getUser().role;
      this.currentuser = this.tokenStorage.getUser();
      if  (this.currentuser.role=='organisateur_amateur') {
        this.organisateurService.findemail(this.currentuser.email).subscribe(res=>{
          this._id=res
          console.log(this._id)
          const idorg= this._id
          console.log(idorg)
             const data1=
               this.excursionForm.value;
               const data={ idorg,...data1};
    
        this.excursionService.create(data).subscribe(
            ( response: any) => {
              console.log(response);
              this.router.navigate(['/confirmation_excursion'])
            },
            ( error: any) => {
              alert(`${error?.error?.message}`)
             
            });
    
               })
       }
       else if(this.currentuser.role=='agence'){
        this.agenceService.findemail(this.currentuser.email).subscribe(res=>{
          this._id=res
          const idorg= this._id
          console.log(idorg)
             const data1=
               this.excursionForm.value;
               const data={ idorg,...data1};
    
        this.excursionService.create(data).subscribe(
            ( response: any) => {
              console.log(response);
              this.router.navigate(['/confirmation_excursion'])
            },
            ( error: any) => {
              alert(`${error?.error?.message}`)
             
            });
      
          console.log(this._id)
               })
       }
   ;
    
      }

    }}
