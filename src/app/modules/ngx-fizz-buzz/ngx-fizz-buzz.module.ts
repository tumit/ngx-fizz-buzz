import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { NgxFizzBuzzComponent } from './components/ngx-fizz-buzz/ngx-fizz-buzz.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [NgxFizzBuzzComponent],
  exports: [NgxFizzBuzzComponent]
})
export class NgxFizzBuzzModule {}
