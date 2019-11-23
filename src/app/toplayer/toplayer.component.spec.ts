import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToplayerComponent } from './toplayer.component';

describe('ToplayerComponent', () => {
  let component: ToplayerComponent;
  let fixture: ComponentFixture<ToplayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToplayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToplayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
