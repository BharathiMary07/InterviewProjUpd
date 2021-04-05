
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import {PurchaseorderService} from '../services/purchaseorder.service';
import {PurchaseOrder} from '../Models/purchaseorder.model';
import { MatTableDataSource } from '@angular/material/table';


 @Component({
  selector: 'app-purchase-orders',
  templateUrl: './purchase-orders.component.html',
  styleUrls: ['./purchase-orders.component.css']
})
export class PurchaseOrdersComponent implements OnInit {
    purOrdForm: FormGroup = new FormGroup({
    po: new FormControl(''),
   })

  displayedColumns: string[] = ['po', 'podate', 'reqshipdate', 'age','so','invsup','con','cusref','payterms','status','purloc','shipto'];
  purchaseOrd: PurchaseOrder[] = [];
   constructor(private purchaseorderservice: PurchaseorderService){}
  ngOnInit():void{
       this.purchaseOrd=this.purchaseorderservice.get();
        }
       GetSearch(){
        if(this.purOrdForm.controls['po'].value)
        this.purchaseOrd= this.purchaseorderservice.getsearch(this.purOrdForm.controls['po'].value);
        console.log(this.purchaseOrd);
       }

     }

