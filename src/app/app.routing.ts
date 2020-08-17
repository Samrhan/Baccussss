import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home';
import {TwitchComponent} from './twitch';
import {LoginComponent} from './login';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'twitch', component: TwitchComponent},
  {path: 'login', component: LoginComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
