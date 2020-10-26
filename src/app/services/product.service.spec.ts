/* tslint:disable:no-unused-variable */
// Http testing module and mocking controller
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

// Other imports
import { TestBed } from '@angular/core/testing';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { async, inject } from '@angular/core/testing';
import { ProductService } from './product.service';
import { HttpClientModule, } from '@angular/common/http';
import { Product } from '../models/product';
// import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

// describe('Service: Product', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       imports:[HttpClientModule],
//       providers: [ProductService]
//     });
//   });

//   it('should ...', inject([ProductService], (service: ProductService) => {
//     expect(service).toBeTruthy();
//   }));
// });
describe('Service:Product', () => {
  let expectedProduct: Product[] = [
    {
      "pName": "Office Table",
      "pDescription": "Expand the storage capabilities of your workspace with this budget-friendly desk.",
      "pManufacturer": "Induscraft",
      "pPrice": 15000,
      "pQuantity": 5,
      "pImagePath": "/assets/table.jpeg",
      "id": 1
    },
    {
      "pName": "Torch",
      "pDescription": "Perfect lighting solution for any kind of search & rescue operations.",
      "pManufacturer": "Philips",
      "pPrice": 99,
      "pQuantity": 125,
      "pImagePath": "/assets/torch.jpeg",
      "id": 3
    },
    {
      "id": 5,
      "pName": "Mouse",
      "pDescription": "Awesome mouse for gaming purpose",
      "pImagePath": "/assets/mouse.jpeg",
      "pManufacturer": "Logitech",
      "pPrice": 599,
      "pQuantity": 10
    },
    {
      "id": 6,
      "pName": "Headphones",
      "pDescription": "Sony Headphone for music lovers, Awesome Bass quality.",
      "pImagePath": "/assets/headphones.jpeg",
      "pManufacturer": "Sony",
      "pPrice": 2100,
      "pQuantity": 7
    },
    {
      "id": 7,
      "pName": "Bag",
      "pDescription": "Great bag for outdoor and adventure purpose. Very lightweight",
      "pImagePath": "/assets/bag.jpeg",
      "pManufacturer": "American Tourister",
      "pPrice": 1500,
      "pQuantity": 30
    },
    {
      "id": 7,
      "pName": "Bag",
      "pDescription": "Great bag for outdoor and adventure purpose. Very lightweight",
      "pImagePath": "/assets/bag.jpeg",
      "pManufacturer": "American Tourister",
      "pPrice": 1500,
      "pQuantity": 30
    },
    {
      "id": 7,
      "pName": "Bag",
      "pDescription": "Great bag for outdoor and adventure purpose. Very lightweight",
      "pImagePath": "/assets/bag.jpeg",
      "pManufacturer": "American Tourister",
      "pPrice": 1500,
      "pQuantity": 30
    },
    {
      "id": 7,
      "pName": "Bag",
      "pDescription": "Great bag for outdoor and adventure purpose. Very lightweight",
      "pImagePath": "/assets/bag.jpeg",
      "pManufacturer": "American Tourister",
      "pPrice": 1500,
      "pQuantity": 30
    },
    {
      "id": 7,
      "pName": "Bag",
      "pDescription": "Great bag for outdoor and adventure purpose. Very lightweight",
      "pImagePath": "/assets/bag.jpeg",
      "pManufacturer": "American Tourister",
      "pPrice": 1500,
      "pQuantity": 30
    },
    {
      "id": 7,
      "pName": "Bag",
      "pDescription": "Great bag for outdoor and adventure purpose. Very lightweight",
      "pImagePath": "/assets/bag.jpeg",
      "pManufacturer": "American Tourister",
      "pPrice": 1500,
      "pQuantity": 30
    },
    {
      "id": 7,
      "pName": "Bag",
      "pDescription": "Great bag for outdoor and adventure purpose. Very lightweight",
      "pImagePath": "/assets/bag.jpeg",
      "pManufacturer": "American Tourister",
      "pPrice": 1500,
      "pQuantity": 30
    },
    {
      "id": 7,
      "pName": "Bag",
      "pDescription": "Great bag for outdoor and adventure purpose. Very lightweight",
      "pImagePath": "/assets/bag.jpeg",
      "pManufacturer": "American Tourister",
      "pPrice": 1500,
      "pQuantity": 30
    },
    {
      "id": 7,
      "pName": "Bag",
      "pDescription": "Great bag for outdoor and adventure purpose. Very lightweight",
      "pImagePath": "/assets/bag.jpeg",
      "pManufacturer": "American Tourister",
      "pPrice": 1500,
      "pQuantity": 30
    },
    {
      "id": 7,
      "pName": "Bag",
      "pDescription": "Great bag for outdoor and adventure purpose. Very lightweight",
      "pImagePath": "/assets/bag.jpeg",
      "pManufacturer": "American Tourister",
      "pPrice": 1500,
      "pQuantity": 30
    },
    
  ]as Product[];
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });

     
    
  })
  
  afterEach(inject([HttpTestingController], (httpTestingController:HttpTestingController) => {
    httpTestingController.verify();
  }));




  it('test product service', inject([HttpClient, HttpTestingController,ProductService], (httpClient: HttpClient, httpTestingController: HttpTestingController, productService: ProductService) => {
  
    productService.getProducts().subscribe(
      productsx => {
        let prods: Product[];
        prods = productsx;
        console.log(prods.length+"**");
        console.log(expectedProduct.length+"()");
        
        expect(prods.length).toEqual(expectedProduct.length, 'should return expected products');
      })
    
      
    const req = httpTestingController.expectOne(productService.baseUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(expectedProduct);
    
    
  }));



  it('test if post request is working', inject([HttpClient, HttpTestingController,ProductService], (httpClient: HttpClient, httpTestingController: HttpTestingController, productService: ProductService) => {
  
    let prodToBeAdded = new Product(999, 'watch', 'a timex watch', '/assets/watch.jpg', 'Timex', 4000, 5);

    productService.addProduct(prodToBeAdded).subscribe(
      productsx => {
        expect(productsx).toEqual(prodToBeAdded,'product should be added'),fail
      })
    
      
    const req = httpTestingController.expectOne(productService.baseUrl);
    expect(req.request.method).toEqual('POST');
    expect(req.request.body).toEqual(prodToBeAdded);
    
    const expectedResponse = new HttpResponse(
      {
        status: 200,
        statusText: 'OK',
        body: prodToBeAdded
      }
    );
    req.event(expectedResponse);
    
    
  }));

});
