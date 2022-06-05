import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ExcursionService } from 'src/app/services/excursion.service';
import { EXCURSION } from 'src/app/services/regres';

@Component({
  selector: 'app-excursion',
  templateUrl: './excursion.component.html',
  styleUrls: ['./excursion.component.css']
})

export class ExcursionComponent implements OnInit {
  searchText: string;
  filters: Object;
  @Input() groupFilters: Object;
  @Input() searchByKeyword: string;
 idc : string
  page: number = 1;
  nom:string;
  form: FormGroup;
  excursions: any =[];
  prenom:string
 filteredExcursions: any[] = [];
  constructor(private router: Router,private fb:FormBuilder,private excursionService: ExcursionService,private ref: ChangeDetectorRef ,ExcursionService:ExcursionService) { }

  deleteClient(excursion:EXCURSION){}

  
  ngOnInit(): void{
    this.getExcursions(this.idc);

  }
  
  filterExcursionList(filters: any, excursions: any): void{
    this.filteredExcursions = this.excursions;     //Reset Client List
    const keys = Object.keys(filters);
    const filterExcursion = excursion => keys.every(key => excursion[key] === filters[key]);
    this.filteredExcursions = this.excursions.filter(filterExcursion);
    this.ref.detectChanges();
  }
  
  loadUsers(): void{
    this.getExcursions(this.idc)
  }

  public removeFilter() {
    this.filteredExcursions = [...this.excursions];
  }


     // Crud ------------------------------------
  getExcursions(idc: string) {
    this.excursionService.findExcursion(idc).subscribe((res) => {
      this.excursions=res;
      console.log(res);    
    })
                  
 

}
clientDetails(idC) {
  this.router.navigate(['details', idC]);
}

edit(idC) {
  this.router.navigate(['update-client', idC]);
}
toAdd() {
  this.router.navigate(['/ajouter']);
} }

