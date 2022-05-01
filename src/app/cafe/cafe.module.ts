import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CafeListComponent } from './cafe-list/cafe-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CafeListComponent],
  exports:[ CafeListComponent]
})
export class CafeModule { }
