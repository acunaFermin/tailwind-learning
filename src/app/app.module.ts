import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerModule } from './banner/banner.module';
import { HeaderModule } from './header/header.module';
import { TarjetasModule } from './tarjetas/tarjetas.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HeaderModule, BannerModule, TarjetasModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
