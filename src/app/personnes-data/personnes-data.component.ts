import { Component, OnInit, Output } from '@angular/core';
import{FormBuilder,FormGroup,FormArray, FormControl, Validators,FormsModule } from '@angular/forms'
import { EventEmitter } from '@angular/core';
import { CVComponent } from '../../cv/cv.component';
import { JsonPipe } from '@angular/common';
import { DataService } from '../data.service';


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
      cp:['',CPvalid],
      photo:[File],
      nom:['',Validators.required],
      prenom:['',Validators.required],
      datenaisance:[Date,isDateNull],
      mail : ['',validateEmail],
      skills: this.fb.array([],validateSkillNumber),
      diplomes :this.fb.array([],validateSkillNumber),
      exp :this.fb.array([],validateSkillNumber)
    });
   // this.data.currentMessage.subscribe(message => this.imgURL = message)
  }

  public imagePath;
  imgURL: any;
  public message: string;
 
  preview(files) {
    if (files.length === 0)
      return;
 
    var mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      this.message = "Only images are supported.";
      return;
    }
 
    var reader = new FileReader();
    this.imagePath = files;
    reader.readAsDataURL(files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
    //this.newMessage();
  }
  get skillsForms()
  {
    return this.myForm.get('skills') as FormArray
  }
  get expForms()
  {
    return this.myForm.get('exp') as FormArray
  }
  get diplomesForms()
  {
    return this.myForm.get('diplomes') as FormArray
  }

  adddiplomes()
  {
    if(this.myForm.get('diplomes').value.length<3)
    {
    const diplomes = this.fb.group({
    name :[],
    lvl : []  
  })
  this.diplomesForms.push(diplomes);
}
}
  addskill()
  {
    if(this.myForm.get('skills').value.length<3)
    {
    const skills = this.fb.group({
    name :[],
    lvl : []  
  })
  this.skillsForms.push(skills);
}
}
addexp()
{
  if(this.myForm.get('exp').value.length<3)
  {
  const exp = this.fb.group({
  name :[],
  lvl : []  
})
this.expForms.push(exp);
}
}
public findInvalidControls() {
  const invalid = [];
  const controls = this.myForm.controls;
  for (const name in controls) {
      if (controls[name].invalid) {
          invalid.push(name);
      }
  }
  console.log(invalid)
  return invalid;
}
deletediplomes(i){
  this.diplomesForms.removeAt(i)
}
deleteSkill(i){
  this.skillsForms.removeAt(i)
}
deleteexp(i){
  this.expForms.removeAt(i)
}
save(){
  CVComponent.myForm=this.myForm;
}

}

function isDateNull(c:FormControl){
  console.log(c.value)
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
function CPvalid(c: FormControl) {
  let CP_REGEXP =/^\d{2}[ ]?\d{3}$/;
  
  return CP_REGEXP.test(c.value) ? null : {
    CPvalid: {
      valid: false
    }
  };
}

function validateSkillNumber(c:FormControl)
{
  return c.value.length<3 ? null : {
    validateSkillNumber: {
      valid: false
    }
  };
}