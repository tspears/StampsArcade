import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-system',
  templateUrl: './system.component.html',
  styleUrls: ['./system.component.css']
})
export class SystemComponent implements OnInit {
  @Input() name: string;
  @Input() status: string;

  constructor() { }

  ngOnInit() {
  }

}
