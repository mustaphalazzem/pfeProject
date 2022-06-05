import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClientService } from 'src/app/services/client.service';
import { CLIENT } from 'src/app/services/regres';

@Component({
  selector: 'app-detail-participant',
  templateUrl: './detail-participant.component.html',
  styleUrls: ['./detail-participant.component.css']
})
export class DetailParticipantComponent implements OnInit {
  id: string;
  client: any;

  constructor(private route:ActivatedRoute,private ClientService:ClientService,private router:Router) { }

  ngOnInit(): void {
    this.client= {} as  CLIENT
    
    this.id = this.route.snapshot.params['_id'];
    
    this.ClientService.findClient(this.id)
      .subscribe(data => {
        console.log(data)
        this.client = data;
      }, error => console.log(error));
  }
 list(){
    this.router.navigate(['acceuil']);
  }
}
