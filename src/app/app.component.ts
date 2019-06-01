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
  systems = [];
  parsedTime = '';

  constructor(afDb: AngularFireDatabase) {
    this.getData(afDb);

    setInterval(() => {
      const time = new Date();

      let hr = time.getHours();
      const min = time.getMinutes();
      const sec = time.getSeconds();

      if (hr > 12) {
        hr = hr - 12;
      }

      this.parsedTime = `${hr < 10 ? `0${hr}` : hr}:${min < 10 ? `0${min}` : min}:${sec < 10 ? `0${sec}` : sec}`;
    }, 1000)
  }

  getData(afDb: AngularFireDatabase) {
    afDb.list('systems').valueChanges().subscribe((data) => {
      this.systems = data;
    });
  }


}
