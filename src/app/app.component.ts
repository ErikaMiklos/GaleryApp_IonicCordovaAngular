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
    {title:'My Gallery', component:GalleryPage},
    {title:'Meteo', component:MeteoPage},
    {title:'Places', component:PlacesPage},
    {title:'Home', component:HomePage},
  ];
  constructor() {}
}
