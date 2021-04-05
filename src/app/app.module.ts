import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewPurchaseOrderComponent } from './new-purchase-order/new-purchase-order.component';
import { PurchaseOrdersComponent } from './purchase-orders/purchase-orders.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TopMenuComponent } from './top-menu/top-menu.component';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule } from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { NewPurOrderComponent } from './new-pur-order/new-pur-order.component';
import { TopSecondMenuComponent } from './top-second-menu/top-second-menu.component';
import { SupplierComponent } from './supplier/supplier.component';
import { PurchaselocationComponent } from './purchaselocation/purchaselocation.component';
import { ShiptolocationComponent } from './shiptolocation/shiptolocation.component';
import { AddinforComponent } from './addinfor/addinfor.component';

@NgModule({
    imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatDividerModule,
    MatTableModule,
    MatListModule,
    MatGridListModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,


    RouterModule.forRoot([
      { path: 'newpur-route', component: NewPurchaseOrderComponent },
      { path: 'purord-route', component: PurchaseOrdersComponent },
      { path: '**', component: PageNotFoundComponent },
      { path: 'top-route', component: TopMenuComponent },
      { path: 'supp-route', component: SupplierComponent },
    ])
  ],
  declarations: [
    AppComponent,
    NewPurchaseOrderComponent,
    PurchaseOrdersComponent,
    PageNotFoundComponent,
    TopMenuComponent,
    NewPurOrderComponent,
    TopSecondMenuComponent,
    SupplierComponent,
    PurchaselocationComponent,
    ShiptolocationComponent,
    AddinforComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
