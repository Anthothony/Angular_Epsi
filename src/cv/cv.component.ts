import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder,FormArray, FormGroup, FormControl } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})

export class CVComponent  implements OnInit {
    t:FormArray
 public static myForm : FormGroup
 imgURL :any
  @Input() childMessage: FormGroup;
  constructor() { }

  ngOnInit() {
    this.childMessage=CVComponent.myForm
    //this.data.currentMessage.subscribe(message => this.imgURL = message)
  }
  getskilllvl(i)
  {
     this.t = CVComponent.myForm.get('skills') as FormArray

      return this.t.value[i].lvl
  }
  getSkillname(i)
  {
     this.t = CVComponent.myForm.get('skills') as FormArray

      return this.t.value[i].name
  }
  getxplvl(i)
  {
     this.t = CVComponent.myForm.get('exp') as FormArray

      return this.t.value[i].lvl
  }
  getexpname(i)
  {
     this.t = CVComponent.myForm.get('exp') as FormArray

      return this.t.value[i].name
  }
  getdiplomeslvl(i)
  {
     this.t = CVComponent.myForm.get('diplomes') as FormArray

      return this.t.value[i].lvl
  }
  getdiplomesname(i)
  {
     this.t = CVComponent.myForm.get('diplomes') as FormArray

      return this.t.value[i].name
  }
  get skillsForms()
  {
    return CVComponent.myForm.get('skills') as FormArray
  }
  get expForms()
  {
    return CVComponent.myForm.get('exp') as FormArray
  }
  get diplomesForms()
  {
    return CVComponent.myForm.get('diplomes') as FormArray
  }

}
