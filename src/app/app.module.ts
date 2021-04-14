import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MultiselectuiLibModule } from 'multiselectui-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
	MultiselectuiLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
