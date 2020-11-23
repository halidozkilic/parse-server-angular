import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Dashboard1Component } from './dashboard1/dashboard1/dashboard1.component';
import { Dashboard2Component } from './dashboard2/dashboard2/dashboard2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar/navbar.component';

import { Parse } from "parse";
import { environment } from '../environments/environment';
Parse.initialize(environment.PARSE_APP_ID, environment.PARSE_JS_KEY);
Parse.serverURL = environment.serverURL;


@NgModule({
  declarations: [
    AppComponent,
    Dashboard1Component,
    Dashboard2Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }