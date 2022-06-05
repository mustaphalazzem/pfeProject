import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OrganisateurService } from 'src/app/services/organisateur.service';
import { ORGANISATEUR, USER } from 'src/app/services/regres';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-organisateur',
  templateUrl: './organisateur.component.html',
  styleUrls: ['./organisateur.component.css']
})
export class OrganisateurComponent implements OnInit {
  public routerLinkVariable="/valid";
  typeForm:FormControl;
  organisateur:ORGANISATEUR= {
    name: '',
    user:null,
    prenom: '',
    email: '',
    type: '',
    addresse: '',
    mdp: '',
    numtel: null,
    genre: '',
    pdp: '',
    pdi: '',
    
  };
  user :  USER={
    _id:'',
    name: '',
    username: '', 
    mdp: '',
    email:'',
    client:null,
    role:'',
   
}

  submitted = false;
  files:any[]=[]
  public type = true;

  organisateurForm:FormGroup
  constructor(private userservice : UserService,private organisateurService: OrganisateurService,private fb :FormBuilder,private router:Router) { 
    this.typeForm = new FormControl('');
    this.organisateurForm = this.fb.group({
      name: ['',Validators.required],
      prenom: ['',Validators.required],
      email: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      type: ['',Validators.required],
      genre: ['',Validators.required],
      addresse: ['',Validators.required],
      mdp: ['',Validators.required,Validators.minLength(8)],
      username: ['',Validators.required],
      numtel: ['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(8), Validators.maxLength(8)]],
      
    })
  }


  ngOnInit(): void {
  
  }
 uploadFile(event:any){
     this.files.push(event?.target?.files[0])
     console.log("this.file",this.files[0])

 }
  saveorganisateur() {
      this.submitted = true
      if(this.organisateurForm.invalid){
        return
      }
      let data:any= this.organisateurForm.value
      let formData = new FormData()
     
      if(this.organisateurForm.controls['type'].value === 'Organisateur amateur'){
        this.userservice.createorganisateur(data).subscribe(
          ( response: any) => {
            console.log("aa");
          },
          ( error: any) => {
            alert(`${error?.error?.message}`)
          });
        this.organisateurService.create(data).subscribe(
            ( response: any) => {
              // this.organisateurService.uploadFile(response?._id,formData).subscribe(response=>{
              //   console.log("file uploaded")
              // },error=>{
              //   alert("error in uploading")
              // })
              console.log(response);
              this.router.navigate(['/confirmation_excursion'])
            },
            ( error: any) => {
              alert(`${error?.error?.message}`)
            });

      }else{
        
        this.userservice.createorganisateur(data).subscribe(
          ( response: any) => {
            console.log("aa");
          },
          ( error: any) => {
            alert(`${error?.error?.message}`)
          });
        this.organisateurService.createagence(data).subscribe(
          ( response: any) => {
            console.log(response);
            //this.router.navigate(['/valid'])
          },
          ( error: any) => {
            alert(`${error?.error?.message}`)
          }
        );
      }
  }
}
