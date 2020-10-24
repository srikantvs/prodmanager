import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprodComponent } from './editprod.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

describe('EditprodComponent', () => {
  let component: EditprodComponent;
  let fixture: ComponentFixture<EditprodComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,HttpClientModule,RouterTestingModule],
      declarations: [ EditprodComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
