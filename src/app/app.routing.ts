import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home';
import {TwitchComponent} from './twitch';
import {LogedinComponent} from './logedin';
import {LoginComponent} from './login/login.component';
import {PannelComponent} from './pannel/pannel.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'twitch', component: TwitchComponent},
  {path: 'logedin', component: LogedinComponent},
  {path: 'login', component: LoginComponent},
  {path: 'pannel', component: PannelComponent},


  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
