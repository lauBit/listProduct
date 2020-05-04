import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {
  products: Product[];
  existProduct;
  alertProduct;

  constructor(
    private productService: ProductService,
    private router: Router
  ) {
    this.existProduct = false
   }

  ngOnInit(): void {
    this.showProducts();
  }

  showProducts(){
    this.productService.getAllProducts().subscribe(
      (response: any) => {
        if (response.products){
        this.products = response.products;
        this.existProduct = true;
        } else {
          this.alertProduct = 'No se encontraron productos';
        }
      }, error => {
        if (error != null ) {
          console.log(error);
        }
      } 
    )
  }

  deleteProduct(id){
    this.productService.deleteProduct(id).subscribe(
      (response:any)=>{
        if(response.product){
          this.alertProduct = "Producto eliminado";
          this.showProducts();
        }else{
          this.alertProduct = "El producto no se eliminó";
        }
      },error=>{
         if (error != null) {
          console.log(error)
        }
      }
    )
  }

  update(product: any) {
    let productId = product._id;
    this.router.navigate(['/updateProduct', productId]);
  }

}
