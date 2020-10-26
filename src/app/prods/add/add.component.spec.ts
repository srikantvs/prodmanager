import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComponent } from './add.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';





describe('AddComponent', () => {
  let component: AddComponent;
  let fixture: ComponentFixture<AddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientModule, RouterTestingModule],
      declarations: [AddComponent],
      providers: [ProductService]

    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('check if details is redered properly ', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('#pDetails').textContent).toContain('Product Details');
  });


  it('should render the product properties ', () => {
    component.productXX = new Product();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelectorAll('td')[0].textContent).toEqual('Name');
    expect(compiled.querySelectorAll('td')[2].textContent).toEqual('Description');
    expect(compiled.querySelectorAll('td')[4].textContent).toEqual('Manufacturer');
    expect(compiled.querySelectorAll('td')[6].textContent).toEqual('Price');
    expect(compiled.querySelectorAll('td')[8].textContent).toEqual('Quantity');
    expect(compiled.querySelectorAll('td')[10].textContent).toEqual('Image Path');
  });


  it('check if text box is shown for product name ', () => {
    component.productXX = new Product();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][name="pName"]')).toBeTruthy();
     
   
    
    
    
  });

  it('check if text box is shown for manufacturer', () => {
    component.productXX = new Product();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="text"][name="pManufacturer"]')).toBeTruthy();
  });

  it('check if text box is shown for price', () => {
    component.productXX = new Product();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="number"][name="pPrice"]')).toBeTruthy();
  });

  it('check if text box is shown for quantity', () => {
    component.productXX = new Product();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="number"][name="pQuantity"]')).toBeTruthy();
  });
  it('check if text box is shown for imagepath', () => {
    component.productXX = new Product();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('input[type="string"][name="pImagePath"]')).toBeTruthy();
  });
  it('check if text box is shown for description', () => {
    component.productXX = new Product();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('textarea[id="desc"]')).toBeTruthy();
  });
  it('check if submit button redered or not', () => {
    component.productXX = new Product();
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('button[type="submit"]')).toBeTruthy();
  });

});
