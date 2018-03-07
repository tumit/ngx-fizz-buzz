import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, AbstractControl } from '@angular/forms';

@Component({
  selector: 'ngx-fizz-buzz',
  templateUrl: './ngx-fizz-buzz.component.html',
  styleUrls: ['./ngx-fizz-buzz.component.css']
})
export class NgxFizzBuzzComponent implements OnInit {
  fg: FormGroup;
  result: string;

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
    if (Number(this.count.value) % 3 === 0) {
      this.result = 'Fizz';
    } else if (Number(this.count.value) % 5 === 0) {
      this.result = 'Buzz';
    } else {
      this.result = this.count.value;
    }
  }
}
