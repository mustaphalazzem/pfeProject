import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgenceService } from 'src/app/services/agence.service';
import { BusService } from 'src/app/services/bus.service';
import { ClientService } from 'src/app/services/client.service';
import { LouerService } from 'src/app/services/louer.service';
import { OrganisateuramateurService } from 'src/app/services/organistaeur-amateur.service';
import { BUS } from 'src/app/services/regres';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { AuthService } from 'src/_services/auth.service';
import { TokenStorageService } from 'src/_services/token-storage.service';
import { UserService } from 'src/_services/user.service';

@Component({
  selector: 'app-louer-bus',
  templateUrl: './louer-bus.component.html',
  styleUrls: ['./louer-bus.component.css']
})
export class LouerBusComponent implements OnInit {
  title = 'appBootstrap';
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

  bus:BUS= {
    _id:'',
    marque:'',
    idlouer:null,
    email : '' ,
    idagence:null,
    nb_place_bus:null };
  id:any;
  submitted = false;
  excursionForm:FormGroup
  constructor(private busService : BusService,private louerservice : LouerService,private route:ActivatedRoute,private agenceService: AgenceService,private organisateurService:OrganisateuramateurService,private clientservice:ClientService,private tokenStorageService: TokenStorageService,private authService: AuthService, private tokenStorage: TokenStorageService,private router: Router ,private userAuthService:UserAuthService,private clientService: ClientService,private fb :FormBuilder , private userservice:UserService) { 
    this.excursionForm = this.fb.group({
      nom: ['',Validators.required],
      destination: ['',Validators.required],
      depart: ['',Validators.required],
      // prix: ['',Validators.required],
      date_depart: ['',Validators.required],
      date_fin: ['',Validators.required],
      // idorg: ['',Validators.required],
  })}

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
  }}
  
  louer() {
    // this.submitted = true
    // if(this.excursionForm.invalid){
    //   return
    // }
    //console.log("aa")
const _id= this.route.snapshot.params['_id']
console.log(_id)
   const data1=
     this.excursionForm.value;
     const data={ _id,...data1};
      // this.userservice.createc(data).subscribe(
      //   ( response: any) => {
      //     console.log("aa");
      //   },
      //   ( error: any) => {
      //     alert(`${error?.error?.message}`)
      //   });
      //   this.clientService.create(data).subscribe(
      //     ( response: any) => {
      //       console.log("aa");
      //     },
      //     ( error: any) => {
      //       alert(`${error?.error?.message}`)
      //     });
      console.log(data)
      
      this.busService.idlouer(data) .subscribe(
          ( response: any) => {
             console.log("aa");
           },
           ( error: any) => {
             alert(`${error?.error?.message}`)
          });
      
        
           }}