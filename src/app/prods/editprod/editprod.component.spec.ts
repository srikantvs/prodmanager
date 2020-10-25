import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditprodComponent } from './editprod.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { Product } from 'src/app/models/product';

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
  it('check if Product Details is redered properly ', () => {
    component.productXX = new Product();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#editPDetails').textContent).toContain('Product Details');
  });
  it('check if appropriate message is displayed if item does not exist', () => {
    component.productXX = null;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#noItemExists').textContent).toContain(`Item doesn't exist..`);
  });
});
