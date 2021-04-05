import { Injectable } from '@angular/core';
import { PurchaseOrder } from '../Models/purchaseorder.model';

@Injectable({
  providedIn: 'root'
})
export class PurchaseorderService {
  PurchaseOrder(arg0: any): PurchaseOrder[] {
    throw new Error('Method not implemented.');
  }
  purOrder:PurchaseOrder[]=[];
  purchaseorder: PurchaseOrder[] = [
  {
   po: 2617,
   podate: "10/9/2010",
   reqshipdate: "11/9/2020",
   age: 37,
   so: 1544234,
   invsup: "MS International INc",
   con: 2343,
   cusref:"spc",
   payterms: "Against b/c",
   status: "Not Received",
   purloc: "MGX-Kent",
   shipto: "SPC Center Inc"
  },
  {
   po: 2616,
   podate: "15/4/2010",
   reqshipdate: "11/9/2020",
   age: 37,
   so: 1544234,
   invsup: "MS International INc",
   con: 2343,
   cusref:"spc",
   payterms: "Against b/c",
   status: "Not Received",
   purloc: "MGX-Kent",
   shipto: "SPC Center Inc"
  }
  ];
 constructor() { }
  get(){
    return this.purchaseorder;
  }
 getsearch(name:any){
    if(this.purchaseorder)
    {
      for(let i=0;i<=this.purchaseorder.length;i++)
      {
        if(this.purchaseorder[i].po==name)
        {
           console.log(this.purchaseorder[i].po);
          this.purOrder=[{
              po: this.purchaseorder[i].po,
              podate: this.purchaseorder[i].podate,
              reqshipdate: this.purchaseorder[i].reqshipdate,
              age:this.purchaseorder[i].age,
              so: this.purchaseorder[i].so,
              invsup: this.purchaseorder[i].invsup,
              con: this.purchaseorder[i].con,
              cusref:this.purchaseorder[i].cusref,
              payterms: this.purchaseorder[i].payterms,
              status: this.purchaseorder[i].status,
              purloc:this.purchaseorder[i].purloc,
              shipto: this.purchaseorder[i].shipto
          }];
          console.log(this.purOrder);
         }
      }
    }
    return this.purOrder;
  }
  addpurord(purchaseOrd: PurchaseOrder)
  {
    this.purchaseorder.push(purchaseOrd)
  }
}
