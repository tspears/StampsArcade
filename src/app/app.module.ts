import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

import { AppComponent } from './app.component';
import { SystemComponent } from './system/system.component';
import { StatusTableComponent } from './status-table/status-table.component';

import {TableModule} from 'primeng/table';


const firebaseConfig = {
  apiKey: "AIzaSyCS6Gv5dJ2c8oaSDjDKbd1eNy-50czyzM4",
  authDomain: "arcade-status.firebaseapp.com",
  databaseURL: "https://arcade-status.firebaseio.com",
  projectId: "arcade-status",
  storageBucket: "arcade-status.appspot.com",
  messagingSenderId: "306187412032",
  appId: "1:306187412032:web:7ca8b23f7624a2d5"
}

@NgModule({
  declarations: [
    AppComponent,
    SystemComponent,
    StatusTableComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    TableModule,
    AngularFireModule.initializeApp(firebaseConfig, 'arcade-status'),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
