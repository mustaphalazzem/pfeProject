import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
  import { ExcursionService } from 'src/app/services/excursion.service';
import { NonexcursionService } from 'src/app/services/nonexcursion.service';
  import { EXCURSION, NONEXCURSION } from 'src/app/services/regres';
 
@Component({
  selector: 'app-derails-annule',
  templateUrl: './derails-annule.component.html',
  styleUrls: ['./derails-annule.component.css']
})
export class DerailsAnnuleComponent implements OnInit {
  id: string;
  nonexcursion: any ={};


    //libelle:Structure[]
    constructor(private route:ActivatedRoute,private nonExcursionService:NonexcursionService,private router:Router) { }
  
    ngOnInit(): void {
     this.nonexcursion= {} as  NONEXCURSION
      
      this.id = this.route.snapshot.params['_id'];
      
      this.nonExcursionService.findExcursion(this.id)
        .subscribe(data => {
          console.log(data)
          this.nonexcursion = data;
        }, error => console.log(error));
    }
    list(){
      this.router.navigate(['acceuil']);
    }
    
  
  }

