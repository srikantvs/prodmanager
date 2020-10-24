import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editprod',
  templateUrl: './editprod.component.html',
  styleUrls: ['./editprod.component.css']
})
export class EditprodComponent implements OnInit {

  productXX: Product;
  productXXCopy: Product;
  products: Product[];
  id: number;
  disableMe: boolean = true;
  constructor(private activatedRoute: ActivatedRoute, private router: Router,private productService:ProductService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(params => {
      this.id = Number.parseInt(params.get('id'));
    });

    this.productService.getProducts().subscribe(resp => {
      this.products = resp;
      this.productXX = this.products.find(p => p.id === this.id);
      this.productXXCopy = this.productXX;
    });

    
  }

  onDelete() {

    if (confirm("Are you sure ? ")) {

      this.productService.deleteProduct(this.id).subscribe(resp => {
        if (resp) {
          alert("Product deleted successfully..")
          this.router.navigate(['/prods/test']);
        }
        else {
          console.log("error in deletion.");
        }
      })
    }
  }

  onSubmit(userForm:NgForm) {
    console.log("hi");
    console.log(userForm);

    let obj: Product = userForm.value;
    

    this.productXX.pName = obj.pName;
    this.productXX.pDescription = obj.pDescription;
    this.productXX.pPrice = obj.pPrice;
    this.productXX.pQuantity = obj.pQuantity;
    this.productXX.pImagePath = obj.pImagePath;

    console.log(obj);
    

    this.productService.updateProduct(this.id,obj).subscribe(resp => {
      if (resp) {
        alert("Product Updated Successfully.");
        this.router.navigate(['/prods/edit', this.id]);
        this.disableMe = true;
      }
    });
  }
  enableDisableMe(): boolean{
    return this.disableMe = false;
  }



}
