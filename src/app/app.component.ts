import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList  } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [
    "node_modules/primeicons/primeicons.css",
    "node_modules/primeng/resources/themes/nova-light/theme.css",
    "node_modules/primeng/resources/primeng.min.css"
  ],
  styleUrls: [
    './app.component.css'
  ]
})

export class AppComponent {
  title = 'Stamps.com Arcade Room Status Page';
  systems = [];

  constructor(afDb: AngularFireDatabase) {
    this.getData(afDb);
    setInterval(() => {
      console.log(111);
      this.getData(afDb);
 }, 300000);
  }

  getData(afDb: AngularFireDatabase) {
    afDb.list('systems').valueChanges().subscribe((data) => {
    this.systems = data;
  });
  }
}
