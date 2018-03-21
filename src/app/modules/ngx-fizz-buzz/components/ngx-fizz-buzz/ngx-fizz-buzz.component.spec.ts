import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxFizzBuzzComponent } from './ngx-fizz-buzz.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('NgxFizzBuzzComponent', () => {
  let component: NgxFizzBuzzComponent;
  let fixture: ComponentFixture<NgxFizzBuzzComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [ReactiveFormsModule],
        declarations: [NgxFizzBuzzComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxFizzBuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be "Fizz" when count is 3', () => {
    // arrange
    spyOn(component.said, 'emit');
    component.count.setValue(3);
    // action
    component.say();
    // assert
    expect(component.said.emit).toHaveBeenCalledWith('Fizz');
  });

  it('should be "Buzz" when count is 5', () => {
    // arrange
    spyOn(component.said, 'emit');
    component.count.setValue(5);
    // action
    component.say();
    // assert
    expect(component.said.emit).toHaveBeenCalledWith('Buzz');
  });


});
