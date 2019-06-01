import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-status-table',
  templateUrl: './status-table.component.html',
  styleUrls: ['./status-table.component.css']
})

export class StatusTableComponent {
  @Input() systems: any[];

  constructor() { }

  formatDate(dateString) {
    var date = +new Date(dateString);
    var seconds = Math.floor((+new Date() - date) / 1000);
    var interval = Math.floor(seconds / 86400);
    var updatedString = '';

    if (interval > 1) {
      updatedString += interval + " Days ";
    }
    seconds = Math.floor(seconds % 86400);
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      updatedString += interval + " Hours ";
    }
    seconds = Math.floor(seconds % 3600);
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      updatedString += interval + " Minutes";
    }

    if (updatedString.length < 1 ) {
      updatedString = '< 1 Minute';
    }
    return updatedString;
  }
}
