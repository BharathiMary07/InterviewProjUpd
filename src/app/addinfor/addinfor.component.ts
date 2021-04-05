import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-addinfor',
  templateUrl: './addinfor.component.html',
  styleUrls: ['./addinfor.component.css']
})
export class AddinforComponent implements OnInit {
  newPurOrdForm = new FormGroup({
    freightfor: new FormControl('', Validators.required),
    vessel: new FormControl('', Validators.required),
    airbill: new FormControl('', Validators.required),
    plan_exfac_date: new FormControl('', Validators.required),
    exfac_date: new FormControl('', Validators.required),
    depart_port: new FormControl('', Validators.required),
    etd_port: new FormControl('', Validators.required),
    arr_port: new FormControl('', Validators.required),
    eta_port: new FormControl('', Validators.required),
    discharge_port: new FormControl('', Validators.required),
    wiring_instr: new FormControl('', Validators.required),
  });
  constructor() { }

  ngOnInit(): void {
  }

}
