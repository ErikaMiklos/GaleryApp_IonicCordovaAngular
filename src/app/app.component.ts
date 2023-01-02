import { Component } from '@angular/core';
import {GalleryPage} from "./gallery/gallery.page";
import {MeteoPage} from "./meteo/meteo.page";
import {PlacesPage} from "./places/places.page";
import {HomePage} from "./home/home.page";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  menus=[
    {title:'My Gallery', components:GalleryPage},
    {title:'Meteo', components:MeteoPage},
    {title:'Places', components:PlacesPage},
    {title:'Home', components:HomePage},
  ];
  constructor() {}
}
