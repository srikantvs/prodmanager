import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  @ViewChild('prodForm', {static: false}) addUserForm:NgForm;

  productXX = new Product(0, "", "", "", "", 0, 0);

  constructor(private router: Router, private http: HttpClient, private productService: ProductService) { }

  ngOnInit() {
  }
  onSubmit(prodForm: NgForm) {

    console.log(prodForm.value);
    this.productXX = prodForm.value;
    this.productXX.id = Math.floor(Math.random() * 100);
    console.log(this.productXX);

    this.productService.addProduct(this.productXX).subscribe(resp => {
      if (resp) {
        alert('product added successfully');
        this.router.navigate(['/prods/test']);
      }
      else {
          console.log("error occurred while adding..")
      }
    })

  }

}
