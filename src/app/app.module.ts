import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {appRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {NavBarreComponent} from './nav-barre/nav-barre.component';
import {FooterComponent} from './footer/footer.component';
import {HomeComponent} from './home';
import {TwitchComponent} from './twitch';
import {LoginComponent} from './login';

@NgModule({
  declarations: [
    AppComponent,
    NavBarreComponent,
    FooterComponent,
    HomeComponent,
    TwitchComponent,
    LoginComponent
  ],
  imports: [
    appRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}


