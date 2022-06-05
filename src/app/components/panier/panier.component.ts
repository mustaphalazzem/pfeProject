import { Component, OnInit } from '@angular/core';
import { Request, response } from 'express';
import { PanierService } from 'src/app/services/panier.service';
import { ExcursionService } from 'src/app/services/excursion.service';
import { CLIENT, EXCURSION, PANIER } from 'src/app/services/regres';
import { FormBuilder, FormControl } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { ChangeDetectorRef, Input } from '@angular/core';
import { ClientService } from 'src/app/services/client.service';
import { any } from 'codelyzer/util/function';
import { getMultipleValuesInSingleSelectionError } from '@angular/cdk/collections';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  excursion: EXCURSION[];
  excursions: EXCURSION[]
  price: any = [];
  destinationn: string | undefined;
  deleteExcursion: FormControl;
  idclient: string | undefined;
  datedepart: Date | any;
  prixx: number | any;
  closeResult: string | undefined;
  // paniers: PANIER[]
  panier: any
  id: string;
  title = 'appBootstrap';
  client: any;
  constructor(private router: Router,private route: ActivatedRoute, private clientService: ClientService, private fb: FormBuilder, private modalService: NgbModal) {
  }
  ngOnInit(): void {
    this.client = {} as CLIENT

    this.id = this.route.snapshot.params['_id'];

    this.clientService.findClient(this.id)
      .subscribe(data => {
        this.client = data;
        console.log('fn')
        console.log(this.client)
      }, error => console.log(error));

  }
  getpanier(){
    this.client = {} as CLIENT

    this.id = this.route.snapshot.params['_id'];

    this.clientService.findClient(this.id)
      .subscribe(data => {
        this.client = data;
        console.log('fn')
        console.log(this.client)
      }, error => console.log(error));

  }
  
  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason: any) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }




  /*selectall(): void{
   this.panier= {} as  PANIER
   this.id = this.route.snapshot.params['_id'];
   this.PanierService.findPanier(this.id).subscribe(response=>{
     this.excursions = response
   }, error => console.log(error));
     
   }*/
  nombre() {
    let j = 0;
    for (const i in this.client.excursions) {
      j = j + 1;
    }
    return (j);
  }
  //  findprix() {
  //    for (const i in this.client.excursions) {

  //       this.price = this.price + this.client.excursions[i].prix;
  //       return (this.price.prix)
  //    } }

  // finddestination(idexcursion: string) {
  //   this.destinationn = this.ExcursionService.findExcursion(idexcursion);

  //   return (this.destination.destination)

  // }
  // finddepart(idexcursion: string) {
  //   this.datedepart = this.ExcursionService.findExcursion(idexcursion);

  //   return (this.datedepart.datedepart)

  // }
  // findprixx(idexcursion: string) {
  //   this.prixx = this.ExcursionService.findExcursion(idexcursion);
  //   return (this.prixx.prix)
  // }
  prix(): number {
    let j = 0;
    for (const i in this.client.excursions) {
      j = j + parseInt(this.client.excursions[i].prix);
    }
    return (j);
  }
  /////////////////////////////////////////////////////////////////
  ///Delete///////////////////////////////////////////////////////
  deleteex(_id:any,idexcursion:any): void {
    
 const data={idexcursion,_id}
 console.log(data)
 this.id = this.route.snapshot.params['_id'];  
 this.clientService.removeexcursion (data)
      .subscribe(
        (response: any) => {
          this.getpanier()

        },
        (error: any) => {
          alert(`${error?.error?.message}`)
        });
  }
}


