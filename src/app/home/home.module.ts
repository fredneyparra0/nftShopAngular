import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { FilterComponent } from './views/filter/filter.component';



@NgModule({
  declarations: [
    DashboardComponent,
    FilterComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
