import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DATA_PROVIDER } from './services/data.service';
import { DemoComponent } from './demo/demo.component';
import { DATA_2_PROVIDER } from './services/data2.service';
import { Demo2Component } from './demo-2/demo-2.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    Demo2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DATA_PROVIDER,
    DATA_2_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
