import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyRevPipe } from './my-rev.pipe';
import { MyAddPipe } from './my-add.pipe';
import { MyMultPipe } from './my-mult.pipe';
import { MarvellousChkPipe } from './marvellous-chk.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MyRevPipe,
    MyAddPipe,
    MyMultPipe,
    MarvellousChkPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
