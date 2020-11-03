import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';
import { Viewprod } from '../models/viewprod';
import { AnalyticsService } from '../services/analytics.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-prods',
  templateUrl: './prods.component.html',
  styleUrls: ['./prods.component.css']
})
export class ProdsComponent implements OnInit {
  
  products: Product[];

  keyItem: string;
  ispriceChecked: boolean = true;
  isDescChecked: boolean = false;
  isManuChecked: boolean = true;
  isQtyChecked: boolean = true;
  vProduct: Product = new Product();


  //
  
  count = 1;
  //

  constructor(private router: Router,private productService:ProductService,private analytics:AnalyticsService) { 
    this.ispriceChecked = true;
  }

  ngOnInit() {
    this.productService.getProducts().subscribe(resp=>this.products=resp);
  }

  editProduct(event: Event, id: Number) {
    console.log("---->"+id);
    this.router.navigate(['/prods/edit', id]);
  }

  isDescCheckedOrNot() {
  }

  viewProduct(event:Event,id:Number) {
    // console.log(event);
    // console.log(id);
    this.vProduct = this.products.find(p => p.id === id);

//=======================================================================
    // this.viewedProdObj.push({ "id1": this.vProduct.id, "name1": this.vProduct.pName, "count1": this.viewedProdObj["count1"]++ });
    // console.log(this.viewedProdObj);
    // console.log("------------------")

    let obx = this.analytics.viewedProdObj.findIndex(p => p.id1 === id);
    
    if (obx!=-1) {//unsuccessful search
      console.log("hi");
      this.analytics.viewedProdObj[obx].count1++;
    }
    else {
      let obj: Viewprod=new Viewprod(this.vProduct.id,this.vProduct.pName,1);
      this.analytics.viewedProdObj.push(obj);
    }
    console.log(this.analytics.viewedProdObj);
    // localStorage.setItem('topViewedProducts', JSON.stringify(this.analytics.viewedProdObj));
    
  }
}