import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SystemBarComponent } from './system-bar/system-bar.component';
import { ReleaseListComponent } from './release-list/release-list.component';

@NgModule({
  declarations: [AppComponent, SystemBarComponent, ReleaseListComponent],
  imports: [BrowserModule, BrowserAnimationsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
