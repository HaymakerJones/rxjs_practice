import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DATA_PROVIDER } from './services/data.service';
import { DemoComponent } from './demo/demo.component';


@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    DATA_PROVIDER
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
