import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'ngx-fizz-buzz',
  templateUrl: './ngx-fizz-buzz.component.html',
  styleUrls: ['./ngx-fizz-buzz.component.css']
})
export class NgxFizzBuzzComponent implements OnInit {
  @Output() said = new EventEmitter<string>();

  fg: FormGroup;

  constructor() {}

  ngOnInit() {
    this.fg = new FormGroup({
      count: new FormControl()
    });
  }

  get count(): AbstractControl {
    return this.fg.get('count');
  }

  say() {
    if (this.count.value) {
      let result = this.count.value;

      if (Number(this.count.value) % 3 === 0) {
        result = 'Fizz';
      } else if (Number(this.count.value) % 5 === 0) {
        result = 'Buzz';
      }

      this.said.emit(result);
    }
  }
}
