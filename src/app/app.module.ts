import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './main/nav/nav.component';
import { MainComponent } from './main/main.component';
import { SlideshowComponent } from './main/slideshow/slideshow.component';
import { InfoComponent } from './main/info/info.component';
import { UsersComponent } from './main/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    MainComponent,
    SlideshowComponent,
    InfoComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
