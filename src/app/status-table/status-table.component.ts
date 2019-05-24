import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status-table',
  templateUrl: './status-table.component.html',
  styleUrls: ['./status-table.component.css']
})

export class StatusTableComponent implements OnInit {
  systems = [
    {
      name: 'Switch',
      status: 'In Use',
      updated: new Date().toDateString()
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
