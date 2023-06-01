import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MagicStringsModule } from 'magic-strings';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MagicStringsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
