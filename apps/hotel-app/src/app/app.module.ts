import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HotelAppUiModule } from '@hotel-app/hotel-app-ui';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule, HotelAppUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
