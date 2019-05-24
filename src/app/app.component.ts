import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Stamps.com Arcade Room Status Page';
  systems = [];

  constructor(afDb: AngularFireDatabase) {
    afDb.list('systems').valueChanges().subscribe((data) => {
      this.systems = data;
    });
  }
}
