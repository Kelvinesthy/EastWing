import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { FooterComponent } from './footer/footer.component';
import { SecondLayerComponent } from './second-layer/second-layer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { Error404Component } from "./error404/error404.component";
import { RouterModule } from '@angular/router';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { ContactService } from "./contact-us/contact.service";
import { MiniContactUsComponent } from './mini-contact-us/mini-contact-us.component';
import { } from "./all-services/services.module"

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    FooterComponent,
    SecondLayerComponent,
    AboutUsComponent,
    ContactUsComponent,
    MiniContactUsComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'home', component: BackgroundComponent},
      {path: 'aboutus', component: AboutUsComponent},
      {path: 'contactus', component: ContactUsComponent},
      {path: '404', component: Error404Component},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'services', loadChildren: './all-services/services.module#ServicesModule'}
    ])
  ],
  providers: [
    ContactService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
