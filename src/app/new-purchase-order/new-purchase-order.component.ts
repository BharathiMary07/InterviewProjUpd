import { Component,OnInit,ViewChild } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { AddinforComponent } from '../addinfor/addinfor.component';
import { PurchaseOrder } from '../Models/purchaseorder.model';
import { PurchaselocationComponent } from '../purchaselocation/purchaselocation.component';
import { PurchaseorderService } from '../services/purchaseorder.service';
import { ShiptolocationComponent } from '../shiptolocation/shiptolocation.component';
import { SupplierComponent } from '../supplier/supplier.component';


@Component({
  selector: 'app-new-purchase-order',
  templateUrl: './new-purchase-order.component.html',
  styleUrls: ['./new-purchase-order.component.css']
})

export class NewPurchaseOrderComponent implements OnInit {

  @ViewChild(SupplierComponent)
  suppComponent: SupplierComponent = new SupplierComponent;

  @ViewChild(PurchaselocationComponent)
  purLocComponent: PurchaselocationComponent = new PurchaselocationComponent;

  @ViewChild(ShiptolocationComponent)
  shipToLocComponent: ShiptolocationComponent = new ShiptolocationComponent;

  @ViewChild(AddinforComponent)
  addInforComponent: AddinforComponent = new AddinforComponent;


  newPurOrdForm = new FormGroup({

    po: new FormControl('', [Validators.required, Validators.minLength(3)]),
    podate: new FormControl('', [Validators.required]),
    so: new FormControl('', Validators.required),
    status: new FormControl('', Validators.required),
    reqshipdate: new FormControl('', Validators.required),
    etadate: new FormControl('', Validators.required),
    poexpdate: new FormControl('', Validators.required),
    cont_no: new FormControl('', Validators.required),
    deltype: new FormControl('', Validators.required),
    shipterms: new FormControl('', Validators.required),
    car: new FormControl('', Validators.required),
    sylvia: new FormControl('', Validators.required),
    breda: new FormControl('', Validators.required),
    amy: new FormControl('', Validators.required),
});

  constructor(private newPurOrdService: PurchaseorderService) {

  }

  ngOnInit(): void {
    }
  ngAfterViewInit() {
    this.newPurOrdForm.addControl('childForm1', this.suppComponent.newPurOrdForm);
    this.suppComponent.newPurOrdForm.setParent(this.newPurOrdForm);

    this.newPurOrdForm.addControl('childForm2', this.purLocComponent.newPurOrdForm);
    this.purLocComponent.newPurOrdForm.setParent(this.newPurOrdForm);

    this.newPurOrdForm.addControl('childForm3', this.shipToLocComponent.newPurOrdForm);
    this.shipToLocComponent.newPurOrdForm.setParent(this.newPurOrdForm);

    this.newPurOrdForm.addControl('childForm4', this.addInforComponent.newPurOrdForm);
    this.addInforComponent.newPurOrdForm.setParent(this.newPurOrdForm);
  }
   onSubmit(){
    console.log(this.newPurOrdForm.value);
    let purchaseord: PurchaseOrder={
      po:this.newPurOrdForm.controls['po'].value,
      podate:this.newPurOrdForm.controls['podate'].value,
      reqshipdate:this.newPurOrdForm.controls['reqshipdate'].value,
      age:this.newPurOrdForm.controls['po'].value,
      so:this.newPurOrdForm.controls['so'].value,
      invsup:this.newPurOrdForm.controls['childForm1'].value.supp,
      con:this.newPurOrdForm.controls['cont_no'].value,
      cusref:this.newPurOrdForm.controls['po'].value,
      payterms:this.newPurOrdForm.controls['childForm1'].value.supp_payterms,
      status:this.newPurOrdForm.controls['status'].value,
      purloc:this.newPurOrdForm.controls['childForm2'].value.pur_loc,
      shipto:this.newPurOrdForm.controls['childForm3'].value.shipto_loc,
    }
    this.newPurOrdService.addpurord(purchaseord);
     }

}
