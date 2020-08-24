import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConnexionsComponent } from './connexions/connexions.component';


@NgModule({
  declarations: [
  DashboardComponent,
  ConnexionsComponent],
  imports: [
    CommonModule,
    PortalRoutingModule
  ]
})
export class portalModule { }
