import { Component } from '@angular/core';

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
}
