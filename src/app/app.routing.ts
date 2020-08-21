import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home';
import {TwitchComponent} from './twitch';
import {LogedinComponent} from './logedin';
import {LoginComponent} from './login';
import {PannelComponent} from './pannel/pannel.component';
import {TwitchoauthsuccessComponent} from './pannel/oauth/twitchoauthsuccess/twitchoauthsuccess.component';
import {TwitchoauthComponent} from './pannel/oauth/twitchoauth/twitchoauth.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'twitch', component: TwitchComponent},
  {path: 'logedin', component: LogedinComponent},
  {path: 'login', component: LoginComponent},
  {path: 'pannel', loadChildren: () => import(`./pannel/pannel.module`).then(m => m.PannelModule)},
  {path: 'pannel/twitchoauthsuccess', component: TwitchoauthsuccessComponent},
  {path: 'pannel/twitchoauth', component: TwitchoauthComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
