import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

newProductName:string;
newProductDescription:string;
newProductQuantity:number;
newProductCost:number;

 @Output()    // event is coming into the component so its output
productAdded=new EventEmitter<{
   ProductName:string;
   ProductDescription:string;
   ProductQuantity:number;
  ProductCost:number;
}>();
onAddProduct(){
  this.productAdded.emit({
    ProductName:this.newProductName,
   ProductDescription:this.newProductDescription,
  ProductQuantity:this.newProductQuantity,
  ProductCost:this.newProductCost,
  });
  this.resetFields();
}
resetFields(){
  this.newProductName="";
  this.newProductDescription="";
this.newProductQuantity=null;
this.newProductCost=null;
}
}
