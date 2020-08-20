import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PannelModule} from './pannel.module';
import {PannelComponent} from './pannel.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ConnexionsComponent} from './connexions/connexions.component';

const routes: Routes = [{
  path: '', component: PannelComponent, children: [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'connexions', component: ConnexionsComponent}
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PannelRoutingModule {
}
