import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-purchaselocation',
  templateUrl: './purchaselocation.component.html',
  styleUrls: ['./purchaselocation.component.css']
})
export class PurchaselocationComponent implements OnInit {
  newPurOrdForm = new FormGroup({
    pur_loc: new FormControl('', Validators.required),
    pur_loc_add: new FormControl('', Validators.required),
    pur_loc_add_suit: new FormControl('', Validators.required),
    pur_loc_city: new FormControl('', Validators.required),
    pur_loc_state: new FormControl('', Validators.required),
    pur_loc_zip: new FormControl('', Validators.required),
    pur_loc_country: new FormControl('', Validators.required),
    });
  constructor() { }

  ngOnInit(): void {
  }

}
