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
    var date = new Date(dateString);
    return date.toLocaleTimeString();
  }

}
