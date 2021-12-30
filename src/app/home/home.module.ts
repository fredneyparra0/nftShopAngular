import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { FilterComponent } from './views/filter/filter.component';
import { SharedModule } from '../shared/shared.module';
import { TableProductsComponent } from './components/table-products/table-products.component';
import { CardProductComponent } from './components/card-product/card-product.component';



@NgModule({
  declarations: [
    DashboardComponent,
    FilterComponent,
    TableProductsComponent,
    CardProductComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
