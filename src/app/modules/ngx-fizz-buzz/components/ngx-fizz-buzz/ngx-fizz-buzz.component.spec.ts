import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFizzBuzzComponent } from './ngx-fizz-buzz.component';

describe('NgxFizzBuzzComponent', () => {
  let component: NgxFizzBuzzComponent;
  let fixture: ComponentFixture<NgxFizzBuzzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxFizzBuzzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFizzBuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
