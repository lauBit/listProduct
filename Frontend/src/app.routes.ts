import { Routes } from '@angular/router';
import { ListProductsComponent } from './app/components/list-products/list-products.component';
import { AddProductComponent } from './app/components/add-product/add-product.component';
import { UpdateProductComponent } from './app/components/update-product/update-product.component';

export const ROUTES: Routes = [
    {path: 'listProducts', component: ListProductsComponent},
    {path: 'addProduct', component: AddProductComponent},
    {path: 'updateProduct/:id', component: UpdateProductComponent},
    {path: '', pathMatch: 'full', redirectTo: 'listProducts'},
    {path: '**', pathMatch: 'full', redirectTo: 'listProducts'}
]