import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-shiptolocation',
  templateUrl: './shiptolocation.component.html',
  styleUrls: ['./shiptolocation.component.css']
})
export class ShiptolocationComponent implements OnInit {
  newPurOrdForm = new FormGroup({
    shipto_loc: new FormControl('', Validators.required),
    shipto_altn: new FormControl('', Validators.required),
    shipto_add: new FormControl('', Validators.required),
    shipto_add_suit: new FormControl('', Validators.required),
    shipto_city: new FormControl('', Validators.required),
    shipto_state: new FormControl('', Validators.required),
    shipto_zip: new FormControl('', Validators.required),
    shipto_country: new FormControl('', Validators.required),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
