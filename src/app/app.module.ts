import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Router } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './main/nav/nav.component';
import { MainComponent } from './main/main.component';
import { SlideshowComponent } from './main/slideshow/slideshow.component';
import { InfoComponent } from './main/info/info.component';
import { UsersComponent } from './main/users/users.component';
import { FeaturesComponent } from './main/features/features.component';
import { StartComponent } from './main/start/start.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingComponent } from './loading/loading.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import {SlideshowModule} from 'ng-simple-slideshow';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import { LottieModule } from 'ngx-lottie';
import { FlexLayoutModule } from '@angular/flex-layout';
import player from 'lottie-web';


export function playerFactory() {
  return player;
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    MainComponent,
    SlideshowComponent,
    InfoComponent,
    UsersComponent,
    FeaturesComponent,
    StartComponent,
    FooterComponent,
    LoadingComponent,
    DashboardComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatTabsModule,
    SlideshowModule,
    LottieModule.forRoot({ player: playerFactory }),
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
