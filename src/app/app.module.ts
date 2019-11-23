import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToplayerComponent } from './toplayer/toplayer.component';
import { PersonnesDataComponent } from './personnes-data/personnes-data.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule  } from '@angular/common/http';
import{MatDatepickerModule,MatNativeDateModule }from '@angular/material';
import { ReverseStr } from './customPipe.pipe';
import { CVComponent } from './cv/cv.component';
import { RouterModule, Routes } from '@angular/router';
//import {DataService} from './data.service';
const appRoutes: Routes = [{path :'form',component:PersonnesDataComponent},
  { path: 'CV', component: CVComponent },
  {path:'',component:PersonnesDataComponent}]
@NgModule({
  declarations: [
    AppComponent,
    CVComponent, 
    ToplayerComponent,
    ReverseStr,
   // DataService,
    PersonnesDataComponent
    
  ],
  imports: [
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule ,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
