import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './home/views/dashboard/dashboard.component';
import { ProductComponent } from './home/views/product/product.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    component: DashboardComponent
  },
  {
    path: "product/:id",
    component: ProductComponent
  },
  {
    path: '**',
    component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
