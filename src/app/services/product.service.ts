import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private baseUrl: string;

  httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"}),
  };

  httpOptionString = {
    headers: new HttpHeaders().set("Content-Type", "text/plain; charset=utf-8"),
  };

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/products";
  }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }

  deleteProduct(id: number): Observable<Product>{
    return this.http.delete<Product>(`${this.baseUrl}/${id}`);
  }

  updateProduct(id: number, prod: Product) :Observable<Product>{
    return this.http.put<Product>(`${this.baseUrl}/${id}`, prod, this.httpOptions);
  }
  
  addProduct(prod: Product): Observable<Product>{
    return this.http.post<Product>(`${this.baseUrl}`,prod,this.httpOptions);
  }

}

