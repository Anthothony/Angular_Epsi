import { Component, OnInit, Input } from '@angular/core';
//import { DataService } from '../data.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CVComponent  implements OnInit {
 public static myForm : FormGroup
 imgURL :any
  @Input() childMessage: FormGroup;
  constructor() { }

  ngOnInit() {
    this.childMessage=CVComponent.myForm
    //this.data.currentMessage.subscribe(message => this.imgURL = message)
  }

}
