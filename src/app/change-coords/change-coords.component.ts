import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-change-coords',
  templateUrl: './change-coords.component.html',
  styleUrls: ['./change-coords.component.css']
})
export class ChangeCoordsComponent implements OnInit {
  @Output() eventClick = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  changeCoords() {
    const newCoords = {
      lat: 44.487047,
      lng: 26.114255
    };
    this.eventClick.emit(newCoords);
  }

}
