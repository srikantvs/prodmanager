import { async, ComponentFixture, TestBed,inject } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { ProdsComponent } from './prods.component';
import { ProductService } from '../services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { SearchPipe } from './search.pipe';
import { RouterTestingModule } from '@angular/router/testing';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product';

class MockProductService {
  products: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([
    {
      "pName": "LCD monitor",
      "pDescription": "awesome lcd monitor.",
      "pManufacturer": "Induscraft",
      "pPrice": 15000,
      "pQuantity": 5,
      "pImagePath": "/assets/table.jpeg",
      "id": 1
    },
    {
      "pName": "Redmi Note 4",
      "pDescription": "best budget smartphone",
      "pManufacturer": "Xiaomi",
      "pPrice": 99,
      "pQuantity": 125,
      "pImagePath": "/assets/torch.jpeg",
      "id": 3
    }
  ]);

  getProducts(): BehaviorSubject<Product[]> {
    return this.products;
  }

  addProduct(product: Product) {
    let tempProduct = this.products.getValue();//copy the entire array first.
    tempProduct.push(product);//copy of products
    this.products.next(tempProduct);
  }
}


describe('ProdsComponent', () => {
  let component: ProdsComponent;
  // let productService: ProductService;
  let fixture: ComponentFixture<ProdsComponent>;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[FormsModule,HttpClientModule,RouterTestingModule],
      declarations: [ProdsComponent,SearchPipe],
      providers: [{ provide: ProductService, useClass: MockProductService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not have products after constructor is called', () => {
    console.log(component.products);
    expect(component.products).toBeTruthy();
  });

  it('should  have products after ngOnInit() is called', inject([ProductService], () => {
    component.ngOnInit();
    expect(component.products.length).toEqual(2);
  }));
  
  //check box dom testing
  it('should not display description at the beginning.', () => {
    expect(component.isDescChecked).toBe(false, 'inititally description will be turned off');
    component.isDescChecked = true;
    expect(component.isDescChecked).toBe(true, 'after checkbox is selected description should come');
  })
  
});
