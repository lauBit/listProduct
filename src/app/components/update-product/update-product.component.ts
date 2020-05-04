import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/models/product';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  product: Product;
  actualizacionCorrecta: boolean;
  productUpdate;
  laura : string;

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.actualizacionCorrecta = true;
    this.route.params.subscribe( params => {
      this.getProductById(params.id);
    })
    this.product = new Product('','','',null,'');
   }

  ngOnInit(): void {
  }

  getProductById(id){    
    this.productService.getProductById(id).subscribe(
      (response: any) => {
        if (response.product){
          this.product = response.product;
          this.updateProduct(this.product._id);
        }
      },error=>{
        if (error != null) {
         console.log(error)
       }
     }
    )
  }

  updateProduct(id){
    id = this.product._id;
    this.productService.updateProduct(id, this.product)
    .subscribe(
      (response:any)=>{
        if(response.product){
          this.actualizacionCorrecta = true;
          this.productUpdate = "Producto creado correctamente";
          this.product = response.product;
          
        }else{
          this.actualizacionCorrecta = false;
          this.productUpdate = "No se actualizó el producto";
        }
      },error=>{
         if (error != null) {
          console.log(error)
        }
      }
    );
  }

}
