import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BusService } from 'src/app/services/bus.service';
import { ExcursionService } from 'src/app/services/excursion.service';
import { BUS } from 'src/app/services/regres';

@Component({
  selector: 'app-reservation-bus',
  templateUrl: './reservation-bus.component.html',
  styleUrls: ['./reservation-bus.component.css']
})
export class ReservationBusComponent implements OnInit {
  buss: any =[];

  @Input() groupFilters: Object;
  @Input() searchByKeyword: string;
 id : string
  page: number = 1;
  nom:string;
  form: FormGroup;
  prenom:string
  filteredExcursions: any[] = [];
  constructor(private busService : BusService,private route:ActivatedRoute,private ExcursionService:ExcursionService,private router:Router) { }

  ngOnInit(): void {
    this.buss= {} as BUS

    this.id = this.route.snapshot.params['_id'];
    
    this.busService.findreserv(this.id)
      .subscribe(data => {
        console.log(data)
        this.buss = data;
      }, error => console.log(error));
  }
  busDetails(_id:string) {
    this.router.navigate (['detailbusreserve',_id])
  }


}
