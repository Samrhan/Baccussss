import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './home';
import {TwitchComponent} from './twitch';
import {LogedinComponent} from './logedin';
import {LoginComponent} from './login';
import {PortalComponent} from './portal/portal.component';
import {TwitchoauthsuccessComponent} from './portal/oauth/twitchoauthsuccess/twitchoauthsuccess.component';
import {TwitchoauthComponent} from './portal/oauth/twitchoauth/twitchoauth.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'twitch', component: TwitchComponent},
  {path: 'logedin', component: LogedinComponent},
  {path: 'login', component: LoginComponent},
  {path: 'portal', loadChildren: () => import(`./portal/portal.module`).then(m => m.portalModule)},
  {path: 'portal/twitchoauthsuccess', component: TwitchoauthsuccessComponent},
  {path: 'portal/twitchoauth', component: TwitchoauthComponent},

  // otherwise redirect to home
  {path: '**', redirectTo: ''}
];

export const appRoutingModule = RouterModule.forRoot(routes);
