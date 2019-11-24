import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  navLinks = [
    { path: 'personnes-data', label:'Home'},
    { path: 'about', label:'About'},
  ];
  constructor(){}

  title = 'test';
  clicked = false;
  actionMethod() {
    this.clicked=true;
  }
}
