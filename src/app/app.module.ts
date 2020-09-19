import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule,FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { NextComponent } from './next/next.component';
import { HttpClientModule } from '@angular/common/http';
import { LatestnewsService } from './latestnews.service';
import { NewsdataComponent } from './newsdata/newsdata.component';
import {WebcamModule} from 'ngx-webcam';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    NextComponent,
    NewsdataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,WebcamModule,FormsModule
  ],
  providers: [LatestnewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
