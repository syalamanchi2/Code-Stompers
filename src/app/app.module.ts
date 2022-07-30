import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { FooterComponent } from './common/footer/footer.component';
import { HomeComponent } from './Home/home/home.component';
import { AboutusComponent } from './AboutUs/aboutus/aboutus.component';
import { InsuranceproductsComponent } from './Products/insuranceproducts/insuranceproducts.component';
import { ContactusComponent } from './ContactUs/contactus/contactus.component';
import { AdminComponent } from './Admin/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    HomeComponent,
    AboutusComponent,
    InsuranceproductsComponent,
    ContactusComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
