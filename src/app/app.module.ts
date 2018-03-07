import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxFizzBuzzModule } from './modules/ngx-fizz-buzz/ngx-fizz-buzz.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxFizzBuzzModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
