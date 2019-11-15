import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {
  @ViewChild('map', {
    static: true
  }) mapElement: any;
  map: google.maps.Map;

  constructor() { }

  ngOnInit(): void {
    const mapProperties = {
         center: new google.maps.LatLng(1.1301, 104.0529),
         zoom: 10,
         mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement,    mapProperties);
 }

}
