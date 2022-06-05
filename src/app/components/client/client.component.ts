import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientService } from 'src/app/services/client.service';
import { CLIENT, USER } from 'src/app/services/regres';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  client:CLIENT= {
    client_id:null,
    _id:'',
    name: '',
    prenom: '',
    email: '',
    genre: '',
    addresse: '',
    mdp: '',
    numtel: null ,
    user:null,
    excursions:null,
  };
  user :  USER={
    _id:'',
    name: '',
    username: '', 
    mdp: '',
    email:'',
    client:null,
    role:''
   
}
  submitted = false;
  clientForm:FormGroup
  constructor(private clientService: ClientService,private fb :FormBuilder , private userservice:UserService) { 
    this.clientForm = this.fb.group({
      name: ['',Validators.required],
      prenom: ['',Validators.required],
      email: ['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      genre: ['',Validators.required],
      addresse: ['',Validators.required],
      mdp: ['',Validators.required],
      numtel: ['',[Validators.required,Validators.pattern("^[0-9]*$"),Validators.minLength(8), Validators.maxLength(8)]],
      username : ['',Validators.required],

    })
  }

  ngOnInit(): void {
  
  }
  
  saveClient() {
    this.submitted = true
    if(this.clientForm.invalid){
      return
    }
    console.log("aa")
  
    const data=
      this.clientForm.value

      this.userservice.createc(data).subscribe(
        ( response: any) => {
          console.log("aa");
        },
        ( error: any) => {
          alert(`${error?.error?.message}`)
        });
        this.clientService.create(data).subscribe(
          ( response: any) => {
            console.log("aa");
          },
          ( error: any) => {
            alert(`${error?.error?.message}`)
          });
          
  }

}

