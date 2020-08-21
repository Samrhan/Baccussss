import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PannelRoutingModule } from './pannel-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConnexionsComponent } from './connexions/connexions.component';


@NgModule({
  declarations: [
  DashboardComponent,
  ConnexionsComponent],
  imports: [
    CommonModule,
    PannelRoutingModule
  ]
})
export class PannelModule { }
