import { invalid } from '@angular/compiler/src/render3/view/util';
import { Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AgenceService } from 'src/app/services/agence.service';
import { ClientService } from 'src/app/services/client.service';
import { OrganisateuramateurService } from 'src/app/services/organistaeur-amateur.service';
import { TokenStorageService } from 'src/_services/token-storage.service';
import { BusService } from '../../services/bus.service';
import { BUS } from '../../services/regres';

@Component({
  selector: 'app-ajouterbus',
  templateUrl: './ajouterbus.component.html',
  styleUrls: ['./ajouterbus.component.css']
})
export class AjouterbusComponent implements OnInit {
  idagence: any;
  data: any;
  excursion: any;
  //libelle:Structure[]
  isLoggedIn = false;
  buss: BUS
  ///
  id: any
  currentuser: any;
  _id: any
  closeResult: string;
  email: any
  loginForm: FormGroup;
  form: any = {};

  isLoginFailed = false;
  errorMessage = '';
  role: string[] = [];

  submitted = false;
  excursionForm: FormGroup
  //


  busForm: FormGroup

  bus: BUS = {
    _id: '',
    email: '',
    marque: '',
    idagence: '',
    nb_place_bus: null,
    idlouer: null,



  };

  constructor(private agenceService: AgenceService, private tokenStorage: TokenStorageService, private organisateurService: OrganisateuramateurService, private clientservice: ClientService, private tokenstorage: TokenStorageService, private busService: BusService, private fb: FormBuilder, private router: Router) {
    this.busForm = this.fb.group({
      nb_place_bus: ['', Validators.required],
      marque: ['', Validators.required],
      // idagence: ['',Validators.required],

    })
  }

  ngOnInit(): void {


    this.role = this.tokenstorage.getUser().role;
    this.currentuser = this.tokenstorage.getUser();
    console.log(this.currentuser)
    this.clientservice.findemail(this.currentuser.email).subscribe(res => {
      this.idagence = res
      console.log(this.idagence)
      this.busForm = new FormGroup({
        //idagence:new FormControl(res['idagence']),
        nb_place_bus: new FormControl,
        marque: new FormControl
      })
    })


    console.log(this.idagence)
  }

  savebus() {
    this.submitted = true
    if (this.busForm.invalid) {
      return
    }
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.role = this.tokenStorage.getUser().role;
      this.currentuser = this.tokenStorage.getUser();
      if (this.currentuser.role == 'organisateur_amateur') {
        this.organisateurService.findemail(this.currentuser.email).subscribe(res => {
          this._id = res
          console.log(this._id)
          const idagence = this._id
          console.log(idagence)
          const data1 =
            this.busForm.value;
          const data = { idagence, ...data1 };
          // let idagence=this.idagence;


          //data1=data+idagence
          this.busService.create(data).subscribe(
            (response: any) => {
              console.log(response);
              this.router.navigate(['/confirmation_excursion'])
            },
            (error: any) => {
              alert(`${error?.error?.message}`)

              console.log(this._id)
            })})
          }
        }

      }


    }

