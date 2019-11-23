import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,FormArray, FormControl, Validators,FormsModule } from '@angular/forms'
import {NgForm} from '@angular/forms';
//import { DataService } from '../data.service';

@Component({
  selector: 'app-personnes-data',
  templateUrl: './personnes-data.component.html',
  styleUrls: ['./personnes-data.component.css']
})
export class PersonnesDataComponent implements OnInit {
  myForm : FormGroup;
  message : PersonnesDataComponent;
  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      nom:['',Validators.required],
      prenom:['',Validators.required],
      datenaisance:['',Date,isDateNull],
      mail : ['',validateEmail],
      skills: this.fb.array([]),validateSkillNumber
    });
    //this.data.currentMessage.subscribe(message => this.message = message)
  }
  get skillsForms()
  {
    return this.myForm.get('skills') as FormArray
  }

  addskill()
  {
    
    const skills = this.fb.group({
    name :[],
    lvl : []  
    })
    this.skillsForms.push(skills);
    console.log(this.skillsForms);
  }

  deleteSkill(i){
    this.skillsForms.removeAt(i)
  }
  save(){
    
    //this.data.changeMessage(this)
  }

}

function isDateNull(c:FormControl){
  console.log("DATENULL")
  return c.value==null?{isDateNull:{valid:false}}:null;
}

function validateEmail(c: FormControl) {
  let EMAIL_REGEXP =/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;

  return EMAIL_REGEXP.test(c.value) ? null : {
    validateEmail: {
      valid: false
    }
  };
}

function validateSkillNumber(c:FormControl)
{
  return c.value.length<3 ? null : {
    validateEmail: {
      valid: false
    }
  };
}