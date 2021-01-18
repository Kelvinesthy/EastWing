import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { servicesRoutes } from "./services.routes";
import {
  HomeServicesComponent,
  ArtCollectionComponent,
  InteriorDesignComponent,
  EventPlanningComponent
} from './index'

@NgModule({
  declarations: [
    HomeServicesComponent,
    ArtCollectionComponent,
    InteriorDesignComponent,
    EventPlanningComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(servicesRoutes)
  ],


  providers: []
})
export class ServicesModule {
}
