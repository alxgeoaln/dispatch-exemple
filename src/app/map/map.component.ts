import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  lat = 51.678418;
  lng = 7.809007;
  zoom = 4;


  constructor() { }

  ngOnInit() {
    this.lat = 39.8282;
    this.lng = -98.5795;
    this.zoom = 4;

  }

  handleEventClicked(data) {
    this.lat = data.lat;
    this.lng = data.lng;
    this.zoom = 12;
  }

}
