import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home';
import {TwitchComponent} from './twitch';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'twitch', component: TwitchComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
