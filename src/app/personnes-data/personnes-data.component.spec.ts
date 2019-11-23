import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnesDataComponent } from './personnes-data.component';

describe('PersonnesDataComponent', () => {
  let component: PersonnesDataComponent;
  let fixture: ComponentFixture<PersonnesDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonnesDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonnesDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
