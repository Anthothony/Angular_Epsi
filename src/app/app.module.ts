import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import {DataService} from './data.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { FirstCharacterUpperCase } from './custompipes.pipe';
import { CVComponent } from '../cv/cv.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MatTabsModule } from '@angular/material';

const appRoutes: Routes = [
  { path: 'CV', component: CVComponent },
  { path:'about', component: AboutComponent },
  { path: 'personnes-data', component: PersonnesDataComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    CVComponent,
    ReverseStr,
    PersonnesDataComponent,
    FirstCharacterUpperCase,
   AboutComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
   // DataService,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatNativeDateModule ,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
