import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { ExcursionService } from 'src/app/services/excursion.service';
import { EXCURSION } from 'src/app/services/regres';
import { TokenStorageService } from 'src/_services/token-storage.service';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class
  DetailComponent implements OnInit {
  id:string
   data1:any 
  data: any;
  excursion: any;
  //libelle:Structure[]
  constructor(private clientservice: ClientService, private route: ActivatedRoute, private ExcursionService: ExcursionService, private router: Router, private tokenStorage: TokenStorageService) { }
  isLoggedIn = false;
  isLoginFailed = false;
  role: string[] = [];
  currentuser: any
  ngOnInit(): void {
    this.excursion = {} as EXCURSION
    this.id = this.route.snapshot.params['_id'];
    
    this.ExcursionService.findExcursion(this.id)
      .subscribe(data => {
        console.log(data)
        this.excursion = data;
      }, error => console.log(error));
      
         
         if (this.tokenStorage.getToken()) {
          this.isLoggedIn = true;
          this.role = this.tokenStorage.getUser().role;
          this.id = this.tokenStorage.getUser()._id
           
          }

   }

    list(){
      this.router.navigate(['acceuil']);
    }
    ajouter(excursion:any,id:any){
      // this.id = this.route.snapshot.params['_id'];

      // this.ExcursionService.findExcursion(this.id)
      //   .subscribe(data => {
      //     console.log(data)
      //     this.excursion = data;
      //   }, error => console.log(error));
      
        const data ={id,excursion}
        
      let conf = confirm("Etes-vous sûr ?");
      if (conf) { this.clientservice.insert(data) .subscribe( (response: any) => {
       
          console.log("aa");
        },
        ( error: any) => {
          alert(`${error?.error?.message}`)
        });

      
    }
    }
  }
  