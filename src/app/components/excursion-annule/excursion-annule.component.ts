import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ExcursionService } from 'src/app/services/excursion.service';
import { NonexcursionService } from 'src/app/services/nonexcursion.service';

@Component({
  selector: 'app-excursion-annule',
  templateUrl: './excursion-annule.component.html',
  styleUrls: ['./excursion-annule.component.css']
})
export class ExcursionAnnuleComponent implements OnInit {


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
  deleteExcursion(nonexcursion:any){
 
    let conf = confirm("Etes-vous sûr ?");
    if (conf)
    
      this.nonexcursionservice.deletee(nonexcursion._id).subscribe(
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
    this.nonexcursionservice.findAll().subscribe(response=>{
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
    this.nonexcursionservice.findExcursion(_id).subscribe((res) => {
      this.excursions=res;
      console.log(res);    
    })
}
liste(_id:string){
  this.router.navigate(['liste_participant', _id]);

}
excursionDetails(_id: String) {
  this.router.navigate(['detail_excursion-annule', _id]);
}

edit(_id: String) {
  this.router.navigate(['update', _id]);
}
toAdd() {
  this.router.navigate(['/ajouter']);
} }
