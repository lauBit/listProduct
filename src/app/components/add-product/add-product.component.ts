import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  product: Product;
  productCreate;
  actualizacionCorrecta:boolean;
  constructor(
    private productService: ProductService,
    private router: Router
  ) {
    this.product = new Product('', '', '', null, '');
  }

  createProduct(){
    this.productService.createProduct(this.product).subscribe(
      (response:any)=>{
        if(response.product){
          this.productCreate = "El producto se ha creado correctamente";
        }else{
          this.productCreate = "No se creo el producto";
        }
      },error=>{
        if (error != null) {
          console.log(error)
        }
      }
    )
    this.router.navigate(['/']);
  };
}
