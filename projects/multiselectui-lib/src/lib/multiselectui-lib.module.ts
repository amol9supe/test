import { NgModule } from '@angular/core';
import { MultiselectuiLibComponent } from './multiselectui-lib.component';
import { MultiselectuiComponent } from './multiselectui/multiselectui.component';
import {CommonModule} from '@angular/common';


@NgModule({
  declarations: [
    MultiselectuiLibComponent,
    MultiselectuiComponent
  ],
  imports: [
	CommonModule
  ],
  exports: [
	MultiselectuiComponent
  ]
})
export class MultiselectuiLibModule { }
