import { Component, OnInit, Input } from '@angular/core';
import { PersonnesDataComponent } from '../app/personnes-data/personnes-data.component';
//import { DataService } from '../data.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent  implements OnInit {
 public static myForm : FormGroup
  @Input() childMessage: FormGroup;
  //message:PersonnesDataComponent;
  constructor() { }

  ngOnInit() {
    this.childMessage=CVComponent.myForm
  }

}
