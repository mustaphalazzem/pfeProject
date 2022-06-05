import { ChangeDetectorRef, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { any } from 'codelyzer/util/function';
import { data } from 'jquery';
import { ExcursionService } from 'src/app/services/excursion.service';
import { CLIENT, EXCURSION } from 'src/app/services/regres';
import {NgxPaginationModule} from 'ngx-pagination'; // <-- import the module
import { NonexcursionService } from 'src/app/services/nonexcursion.service';
@Component({
  selector: 'app-consulter-excursion',
  templateUrl: './consulter-excursion.component.html',
  styleUrls: ['./consulter-excursion.component.css']
})

export class ConsulterExcursionComponent implements OnInit {
  excursions: any =[];

  @Input() groupFilters: Object;
  @Input() searchByKeyword: string;
 idc : string
  page: number = 1;
  nom:string;
  form: FormGroup;
  prenom:string
 filteredExcursions: any[] = [];

  constructor(private nonexcursionservice : NonexcursionService,private router: Router,private fb:FormBuilder,private excursionService: ExcursionService,private ref: ChangeDetectorRef) { }
  deleteExcursion(excursion:any){
 
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    this.nonexcursionservice.create(excursion).subscribe(
      (resp) => {
      console.log(resp);
      this.getExcursion();
    },
    (err) => {
      console.log(err);
    }
  );
      this.excursionService.deletee(excursion._id).subscribe(
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

  
  ngOnInit(): void {
   this.getExcursion()

  }
  getExcursion(){
    this.excursionService.findAll().subscribe(response=>{
      this.excursions = response
    })
  }
  filterExcursionList(filters: any, excursions: any): void {
    this.filteredExcursions = this.excursions;     //Reset Client List
    const keys = Object.keys(filters);
    const filterExcursion = excursion => keys.every(key => excursion[key] === filters[key]);
    this.filteredExcursions = this.excursions.filter(filterExcursion);
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
    this.excursionService.findExcursion(_id).subscribe((res) => {
      this.excursions=res;
      console.log(res);    
    })
}
liste(_id:string){
  this.router.navigate(['liste_participant', _id]);

}
excursionDetails(_id: String) {
  this.router.navigate(['detail_excursion', _id]);
}

edit(_id: String) {
  this.router.navigate(['update', _id]);
}
toAdd() {
  this.router.navigate(['/ajouter']);
} }
