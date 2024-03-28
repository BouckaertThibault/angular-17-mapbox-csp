import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
// @ts-ignore
import mapboxgl from 'mapbox-gl/dist/mapbox-gl-csp';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  map: mapboxgl.Map;

  async ngOnInit() {
    mapboxgl.workerClass = new Worker(
      new URL('./mapbox.worker', import.meta.url)
    );

    this.map = new mapboxgl.Map({
      accessToken:
        'pk.eyJ1IjoiYW50ZWxvdmUxOSIsImEiOiJja2d1azl4ZmgwY3dvMnJueGljMnp6YnprIn0.aIRE0Ii2AmWYWCW5Z3cEFg',
      container: 'map',
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 1,
    });
  }
}
