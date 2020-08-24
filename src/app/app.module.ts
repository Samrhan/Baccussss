import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {appRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {NavBarreComponent} from './nav-barre/nav-barre.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home';
import {TwitchComponent} from './twitch';
import {LogedinComponent} from './logedin';
import {LogstateComponent} from './logstate/logstate.component';
import {LoginComponent} from './login/login.component';
import {PortalComponent} from './portal/portal.component';
import {TwitchoauthsuccessComponent} from './portal/oauth/twitchoauthsuccess/twitchoauthsuccess.component';
import {TwitchoauthComponent} from './portal/oauth/twitchoauth/twitchoauth.component';
import {SidebarComponent} from './portal/sidebar/sidebar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarreComponent,
    FooterComponent,
    HomeComponent,
    TwitchComponent,
    LogedinComponent,
    LogstateComponent,
    LoginComponent,
    PortalComponent,
    TwitchoauthsuccessComponent,
    TwitchoauthComponent,
    SidebarComponent],
  imports: [
    appRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}


