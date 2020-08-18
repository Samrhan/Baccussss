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
import { LoginComponent } from './login/login.component';
import { PannelComponent } from './pannel/pannel.component';

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
    PannelComponent
  ],
  imports: [
    appRoutingModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}


