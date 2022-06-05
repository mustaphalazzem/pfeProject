import { ChangeDetectorRef, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { any } from 'codelyzer/util/function';
import { data } from 'jquery';
import {BusService } from 'src/app/services/bus.service';
import { CLIENT, EXCURSION ,BUS} from 'src/app/services/regres';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { ReservationService } from 'src/app/services/reservation.service';

@Component({
  selector: 'app-liste-bus',
  templateUrl: './liste-bus.component.html',
  styleUrls: ['./liste-bus.component.css']
})
export class ListeBusComponent implements OnInit {

  constructor(private router: Router,private fb:FormBuilder,private busService: BusService,private reservationservice:ReservationService,private ref: ChangeDetectorRef) { }
  @Input() groupFilters: Object;
  @Input() searchByKeyword: string;
  buss: any =[];

  idc : string
  page: number = 1;
  nom:string;
  form: FormGroup;
  prenom:string
 filteredExcursions: any[] = [];
  ngOnInit(): void {
    this.getExcursion()
  }
  getExcursion(){
    this.busService.findAll().subscribe(response=>{
      this.buss = response
    })
  }
  filterExcursionList(filters: any, excursions: any): void {
    this.filteredExcursions = this.buss;     //Reset Client List
    const keys = Object.keys(filters);
    const filterExcursion = excursion => keys.every(key => excursion[key] === filters[key]);
    this.filteredExcursions = this.buss.filter(filterExcursion);
    this.ref.detectChanges();
  }
  
  /*loadUsers(): void {
    this.clientService.getClients().subscribe(excursions => this.excursions = excursions);
  }

 /* public removeFilter() {
    this.filteredClients = [...this.clients];
  }*/


     // Crud ------------------------------------
  getExcursions(_id: string) {
    this.busService.findOne(_id).subscribe((res) => {
      this.buss=res;
      console.log(res);    
    })
}
louer(_id){
 

 let conf = confirm("Etes-vous sûr ?");
 if (conf)     
 this.router.navigate(['louerbus', _id]);

  
}
excursionDetails(_id: String) {
  this.router.navigate(['detailbus', _id]);
}

edit(_id: String) {
  this.router.navigate(['update', _id]);
}
toAdd() {
  this.router.navigate(['/ajouter']);
} 
deleteExcursion(_id:string){
 console.log(_id)
  let conf = confirm("Etes-vous sûr ?");
  if (conf)

    this.busService.deletee(_id).subscribe(
      (resp) => {
        console.log(resp);
        this.getExcursion();
      },
      (err) => {
        console.log(err);
      }
    );
    this.router.navigate(['/gestionclients'])
.then(() => {
  window.location.reload();
});
}
}
