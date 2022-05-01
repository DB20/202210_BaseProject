import { Component, OnInit } from '@angular/core';
import { Cafe } from './cafe';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css']
})
export class CafeComponent implements OnInit {

  private cafe: Array<Cafe> = [];
  constructor() { }

  ngOnInit() {
  }

}
