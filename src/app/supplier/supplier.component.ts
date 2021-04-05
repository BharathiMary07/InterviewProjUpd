import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NewPurOder_Supplier } from '../Models/newpurorder_supplier';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent implements OnInit {
    newPurOrdForm = new FormGroup({
    supp: new FormControl('', Validators.required),
    supp_add: new FormControl('', Validators.required),
    supp_add_suit: new FormControl('', Validators.required),
    supp_city: new FormControl('', Validators.required),
    supp_state: new FormControl('', Validators.required),
    supp_zip: new FormControl('', Validators.required),
    supp_country: new FormControl('', Validators.required),
    supp_payterms: new FormControl('', Validators.required),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
