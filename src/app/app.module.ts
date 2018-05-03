import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { tutorialReducers } from './reducers/tutorial.reducers';

import { AppComponent } from './app.component';
import { ReadComponent } from './components/read/read.component';
import { WriteComponent } from './components/write/write.component';


@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    WriteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    StoreModule.forRoot({ 
      tutorial: tutorialReducers
     })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
