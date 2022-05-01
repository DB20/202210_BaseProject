import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeComponent } from './cafe.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CafeComponent],
  exports:[ CafeComponent]
})
export class CafeModule { }
