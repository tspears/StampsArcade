import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  @Input() name: string;
  @Input() status: string;
  @Input() updated: string;

  constructor() { }

  ngOnInit() {
  }

  formatDate(dateString) {
    var date = new Date(dateString);
    return date.toLocaleTimeString();
  }

}
