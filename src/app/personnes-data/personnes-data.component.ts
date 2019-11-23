import { Component, OnInit } from '@angular/core';
import{FormBuilder,FormGroup,FormArray, FormControl, Validators,FormsModule } from '@angular/forms'
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-personnes-data',
  templateUrl: './personnes-data.component.html',
  styleUrls: ['./personnes-data.component.css']
})
export class PersonnesDataComponent implements OnInit {
  myForm : FormGroup;

  constructor(private fb : FormBuilder) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      nom:['',Validators.required]
      ,
      skills: this.fb.array([]) 
    });
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
}
