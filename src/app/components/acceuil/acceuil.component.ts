import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ExcursionService } from 'src/app/services/excursion.service';
import { EXCURSION } from 'src/app/services/regres';
import { Router } from '@angular/router';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
  recherchedate:FormControl;
  submitted = false;
  rechercheForm:FormControl ;
  selectForm:FormControl;
  excursions : any = [];
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
    idorg : ''
    };

  constructor(private excursionService: ExcursionService,private router:Router ,private fb :FormBuilder) { 
    this.rechercheForm = new FormControl('')
    this.recherchedate = new FormControl
    this.selectForm= new FormControl

  }
  ngOnInit(): void {
    this.excursionService.findAll().subscribe(response=>{
      this.excursions = response
    })
  }
  
  
  onSubmit() {
    this.rechercher()
      this.submitted = true;
     }
 rechercher(){ 
  const data= this.rechercheForm.value
  const dat= this.recherchedate.value
console.log(data)
  this.excursionService.findDest(data)
  .subscribe(
    ( response : any) => {
      this.excursions= response ;
      
    },
      ( error: any) => {
        alert(`${error?.error?.message}`)
      });
  
      this.excursionService.findAtDate(dat)
        .subscribe(
            ( response : any) => {
              this.excursions= response ;
              
            },
            ( error: any) => {
              alert(`${error?.error?.message}`)
      });}
      trie(){
        if (this.selectForm.value === 'croissant'){
          this.triercroissant()
        }else if (this.selectForm.value === 'decroissant'){this.trierdecroissant()}
      }
      triercroissant (): void {
       {
          this.excursionService.triercroissant()
          .subscribe(
            ( response : any) => {
              this.excursions= response ;
              
            },
            ( error: any) => {
              alert(`${error?.error?.message}`)
            })}}
      trierdecroissant(): void{
              this.excursionService.trierdecroissant()
              .subscribe(
                ( response : any) => {
                  this.excursions= response ;
                  
                },
                ( error: any) => {
                  alert(`${error?.error?.message}`)
                });}

                public isLoggedIn(){
                    return localStorage.getItem('Token')
                  }
                  getexcursion() {
                    this.excursionService.findAll().subscribe(response=>{
                      this.excursions = response
                    })}
        excursionDetails(_id: string) {
          this.router.navigate(['/detail_excursion', _id]);
          }
          getExcursionById(_id:string):EXCURSION{
            excursions: this.getexcursion()
            return this.excursions.find(excursion => excursion._id == _id)
          }
}