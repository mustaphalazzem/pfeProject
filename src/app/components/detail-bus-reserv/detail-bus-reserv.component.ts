import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BusService } from 'src/app/services/bus.service';
import { BUS } from 'src/app/services/regres';

@Component({
  selector: 'app-detail-bus-reserv',
  templateUrl: './detail-bus-reserv.component.html',
  styleUrls: ['./detail-bus-reserv.component.css']
})
export class DetailBusReservComponent implements OnInit {
  id: string;
  bus: any ;
  constructor(private route:ActivatedRoute,private busService:BusService,private router:Router) { }

  ngOnInit(): void {
    this.bus= {} as  BUS
    
    this.id = this.route.snapshot.params['_id'];
    
    this.busService.findOne(this.id)
      .subscribe(data => {
        console.log(data)
        this.bus = data;
      }, error => console.log(error));
  }
  

}
