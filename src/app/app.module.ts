import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { SystemComponent } from './system/system.component';
import { StatusTableComponent } from './status-table/status-table.component';

import {TableModule} from 'primeng/table';


@NgModule({
  declarations: [
    AppComponent,
    SystemComponent,
    StatusTableComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
