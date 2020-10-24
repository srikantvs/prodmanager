/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LoginService } from './login.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Login', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,HttpClientModule,RouterTestingModule,HttpClientTestingModule],
      providers: [LoginService]
    });
  });

  it('should ...', inject([LoginService], (service: LoginService) => {
    expect(service).toBeTruthy();
  }));
});
