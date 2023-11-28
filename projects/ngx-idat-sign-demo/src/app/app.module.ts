import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxIdatSignModule } from 'ngx-idat-sign';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxIdatSignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
