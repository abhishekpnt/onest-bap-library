import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SbOnestModule } from 'projects/sb-onest/src/lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SbOnestModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
