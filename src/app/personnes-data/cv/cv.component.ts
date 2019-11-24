import { Component, OnInit, Input } from '@angular/core';
import { PersonnesDataComponent } from '../personnes-data.component';
//import { DataService } from '../data.service';
import { FormBuilder, FormGroup, FormControl, ControlContainer } from '@angular/forms';


@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent implements OnInit {
  myForm : FormGroup;
  //message:PersonnesDataComponent;
  constructor() { }

  ngOnInit() {
   // this.data.currentMessage.subscribe(message => this.message = message)
  }

}
