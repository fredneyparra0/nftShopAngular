import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/views/login/login.component';
import { SignupComponent } from './authentication/views/signup/signup.component';
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
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: '**',
    component: DashboardComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
