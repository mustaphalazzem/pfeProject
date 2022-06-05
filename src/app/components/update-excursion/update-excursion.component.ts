import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ExcursionService } from 'src/app/services/excursion.service';
import { EXCURSION } from 'src/app/services/regres';

@Component({
  selector: 'app-update-excursion',
  templateUrl: './update-excursion.component.html',
  styleUrls: ['./update-excursion.component.css']
})
export class UpdateExcursionComponent implements OnInit {
  alert:boolean=false

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
    idorg:'',
  
   
  };
  submitted = false;
  excursionForm:FormGroup
  
  constructor(private route :ActivatedRoute,private excursionService: ExcursionService,private fb :FormBuilder, private router:Router) { 
    this.excursionForm = this.fb.group({
      nom: ['',Validators.required],
      destination: ['',Validators.required],
      depart: ['',Validators.required],
      prix: ['',Validators.required],
      date_depart: ['',Validators.required],
      date_fin: ['',Validators.required],
    })
   }

  ngOnInit(): void {
    
   /* this.excursionService.findExcursion(this.route.snapshot.params['id']).subscribe((result)=>{
      this.excursionForm=new FormGroup({
        nom:new FormControl(result['nom']),
       destination:new FormControl(result['destination']),
        depart:new FormControl(result['depart']),
        prix:new FormControl(result['prix']),
       date_debut:new FormControl(result['mat']),
        date_fin:new FormControl(result['structure']),
        
      })
    })*/
  }
 return(){  this.router.navigate(['/liste_participant']);}

  updateEcursion() {
    this.submitted = true
    if(this.excursionForm.invalid){
      return
    }
    this.excursionService.update(this.route.snapshot.params['id'],this.excursionForm.value).subscribe((resultat)=>{
      console.log(resultat,"data updated successfull");
      this.alert=true;
      
    })
  }
  closeAlert(){
    this.alert=false;
    this.router.navigate(['/liste_excursion'])
  }
  
}
