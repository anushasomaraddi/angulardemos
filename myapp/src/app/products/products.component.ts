import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
products=[];
onAddProduct(productData:{
  ProductName:string;
  ProductDescription:string;
  ProductQuantity:number;
 ProductCost:number;

}){

  this.products.push(productData);
//  this.products.push({
//   ProductName:productData.ProductName,
//   ProductDescription:productData.ProductDescription,
//   ProductQuantity:productData.ProductQuantity,
//  ProductCost:productData.ProductCost,

//  });

}
}
