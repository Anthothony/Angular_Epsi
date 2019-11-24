/*import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PersonnesDataComponent } from './personnes-data/personnes-data.component';

@Injectable()
export class DataService {

  private messageSource = new BehaviorSubject<PersonnesDataComponent>(null);
  currentMessage = this.messageSource.asObservable();

  constructor() { }

  changeMessage(message: PersonnesDataComponent) {
    this.messageSource.next(message)
  }

}*/