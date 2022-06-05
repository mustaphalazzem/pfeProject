import { Component, NgModule, OnInit } from '@angular/core';

import { Request, response } from 'express';
import { FavorisService } from 'src/app/services/favoris.service';
import { ExcursionService } from 'src/app/services/excursion.service';
import { FAVORIS } from 'src/app/services/regres';
import { FormBuilder, FormControl } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-favoriss',
  templateUrl: './favoriss.component.html',
  styleUrls: ['./favoriss.component.css']
})
export class FavorissComponent implements OnInit {
  excursions: any=[];
  price: any=[] ;
  destination:string | undefined ;
  
  idclient:String | undefined ;
  ExcursionService: any;
  datedepart: any;
  prixx: any;
  closeResult: string | undefined;
  deleteExcursion: any;
  constructor(private FavorisService: FavorisService,private fb :FormBuilder,private modalService: NgbModal) { 

  }

  ngOnInit(): void{
  }
  selectall(): void{
    this.FavorisService.findPanier("12").subscribe(response=>{
      this.excursions = response
      
    })}
  nombre() {let j=0 ;
    for( const i in this.excursions ) {
       j=j+1;
    }
    return(j) ;
  }
  findprix(){
    for( const i in this.excursions) {
      
      this.price=this.price+this.ExcursionService.findExcursion(i[1]).prix  ;
      return(this.price)
  }
  }
  finddestination (idexcursion:string){
  this.destination=this.ExcursionService.findExcursion(idexcursion).destination  ;
      return(this.destination)
  
  }
  finddepart (idexcursion:string){
    this.datedepart=this.ExcursionService.findExcursion(idexcursion).date_depart  ;
        return(this.datedepart)
    
    }
  findprixx (idexcursion:string){
    this.prixx=this.ExcursionService.findExcursion(idexcursion).prix  ;
    return(this.prixx)
  }
  prix(): number {let j=0 ;
    for( const i in this.price) {
      j=j+parseInt(i) ;
    }
    return(j) ;
  }
  /////////////////////////////////////////////////////////////////
  ///Delete///////////////////////////////////////////////////////
  deleteex(): void{
    const data= this.deleteExcursion.value
    this.FavorisService.deletee(data)
            .subscribe(
              ( response : any) => {
                this.excursions= response ;
                
              },
              ( error: any) => {
                alert(`${error?.error?.message}`)
              });}
  }
  


