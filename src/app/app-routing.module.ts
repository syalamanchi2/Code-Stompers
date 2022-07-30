import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Home/home/home.component';
import { InsuranceproductsComponent } from './Products/insuranceproducts/insuranceproducts.component';
import { AboutusComponent } from './AboutUs/aboutus/aboutus.component';
import { ContactusComponent } from './ContactUs/contactus/contactus.component';
import { AdminComponent } from './Admin/admin/admin.component';

const routes: Routes = [
  { path: 'Home', component: HomeComponent },
  { path: 'InsuranceProducts', component: InsuranceproductsComponent },
  { path: 'Admin', component: AdminComponent },
  { path: 'AboutUs', component: AboutusComponent },
  { path: 'ContactUs', component: ContactusComponent },
];
let somethingnew;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
