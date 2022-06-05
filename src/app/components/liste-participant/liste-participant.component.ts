import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { ExcursionService } from 'src/app/services/excursion.service';
import { CLIENT, EXCURSION } from 'src/app/services/regres';

@Component({
  selector: 'app-liste-participant',
  templateUrl: './liste-participant.component.html',
  styleUrls: ['./liste-participant.component.css']
})
export class ListeParticipantComponent implements OnInit {
  searchText: string;
  filters: Object;
  
  @Input() groupFilters: Object;
  @Input() searchByKeyword: string;
  idc : string
  page: number = 1;
  nom:string;
  form: FormGroup;
  prenom:string
  filteredClients: any[] = [];
  clients:CLIENT;
  excursions:any;
  id: string;
  client: CLIENT[] ;
  excursion:any;
  constructor(private route:ActivatedRoute,private excursionservice:ExcursionService,private router: Router,private fb:FormBuilder,private clientService: ClientService,private ref: ChangeDetectorRef) { }
 
  
  ngOnInit(): void {
    this.excursion= {} as  EXCURSION
    
    this.id = this.route.snapshot.params['_id'];
    
    this.excursionservice.findExcursion(this.id)
      .subscribe(data => {
        this.excursion = data;
        console.log(this.excursion)

      }, error => console.log(error));
  }

    /*this.client= {} as  CLIENT
    this.id = this.route.snapshot.params['_id'];
  let k=this.excursionservice.findpart(this.id)
  console.log  ('$k')
   //var k = this.excursionservice.findpart(this.id)
   
   for ( let j=0 ;Object.keys(k).length>j ; j++) {

    this.clientService.findClient( k[j] ).subscribe(response=>{
      this.clients = response
    })
  }
  }
  getclients(){
    this.client= {} as  CLIENT
    this.id = this.route.snapshot.params['_id'];
   
  
   
   for ( let j=0 ;Object.keys(this.excursionservice.findpart(this.id)).length>j ; j++) {
  
    this.clientService.findClient( this.excursionservice.findpart(this.id)[j] ).subscribe(response=>{
      this.clients = response
    })
  }
   
  }
filterClientList(filters: any, clients: any): void {
    this.filteredClients = this.clients;     //Reset Client List
    const keys = Object.keys(filters);
    const filterClient = client => keys.every(key => client[key] === filters[key]);
    this.filteredClients = this.clients.filter(filterClient);
    this.ref.detectChanges();
  }*/
    
 /* loadUsers(): void {
    _id:String
    this.getClients(this._id)
  }*/

  public removeFilter() {
    this.filteredClients = [...this.excursions.client];
  }


     // Crud ------------------------------------
  getClients(_id: string) {
    this.clientService.findClient(_id).subscribe((res) => {
      this.excursions=res;
      console.log(res);    
    })
 
}
getclients() {

} 
clientDetails(_id: String) {
  this.router.navigate(['/detail_participant', _id]);
}
deleteClient(client:any){
 
  let conf = confirm("Etes-vous sûr ?");
  if (conf)

    this.clientService.deletee(client._id).subscribe(
      (resp) => {
        console.log(resp);
        this.getclients();
      },
      (err) => {
        console.log(err);
      }
    )
    this.router.navigate(['/gestionclients'])
.then(() => {
  window.location.reload();
});
}    
edit(_id: String) {
  this.router.navigate(['update-client', _id]);
}
toAdd() {
  this.router.navigate(['/ajouter']);
} }

