import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupComponent } from './signup.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,HttpClientModule,RouterTestingModule],
      declarations: [ SignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the user properties ', () => {
   
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('label')[0].textContent).toEqual('UserID*');
    expect(compiled.querySelectorAll('label')[1].textContent).toEqual('Name*');
    expect(compiled.querySelectorAll('label')[2].textContent).toEqual('Email address*');
    expect(compiled.querySelectorAll('label')[3].textContent).toEqual('Password*');
    expect(compiled.querySelectorAll('label')[4].textContent).toEqual('Age*');
    expect(compiled.querySelectorAll('label')[5].textContent).toEqual('Gender*');
  });

  it('check if submit button redered or not', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button[type="submit"]')).toBeTruthy();
  });

});
