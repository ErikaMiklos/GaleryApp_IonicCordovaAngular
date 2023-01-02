import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  contact={
    name:'EMiklos',
    email:'erika@gmail.com',
    photo:'assets/images/teddybear2.png'
  }

  constructor() {}

}
