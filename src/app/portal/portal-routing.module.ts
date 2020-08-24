import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PortalComponent} from './portal.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ConnexionsComponent} from './connexions/connexions.component';

const routes: Routes = [{
  path: '', component: PortalComponent, children: [
    {path: 'home', component: DashboardComponent},
    {path: 'connexions', component: ConnexionsComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortalRoutingModule {
}
