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
    StartComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
