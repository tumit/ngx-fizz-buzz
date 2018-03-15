import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { NgxFizzBuzzModule } from './modules/ngx-fizz-buzz/ngx-fizz-buzz.module';
import { ReactiveFormsModule } from '@angular/forms';
describe('AppComponent', () => {
  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        imports: [ReactiveFormsModule, NgxFizzBuzzModule],
        declarations: [AppComponent]
      }).compileComponents();
    })
  );

  it(
    'should create the app',
    async(() => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.debugElement.componentInstance;
      expect(app).toBeTruthy();
    })
  );
});
