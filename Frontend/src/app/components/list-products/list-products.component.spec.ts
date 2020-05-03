import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ListProductsComponent } from './list-products.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from 'src/app/services/product.service';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from 'src/app/models/product';
import { throwError, of } from 'rxjs';
import { FormsModule } from '@angular/forms';

fdescribe('ListProductsComponent', () => {
  let component: ListProductsComponent;
  let fixture: ComponentFixture<ListProductsComponent>;
  let productService;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductsComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule
      ],
      providers: [
        { provide: ProductService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(inject([ProductService], s => {
    productService = s;
    fixture = TestBed.createComponent( ListProductsComponent );
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should showProductsFail', () => {
    const response: any = 'No se encontraron productos'
    spyOn(productService, 'getAllProducts').and.returnValue(of(response))
    component.showProducts();
    fixture.detectChanges();
    expect(component.alertProduct).toEqual(response);
  });

  it('should showProductSuccess', () => {
    component.existProduct = true;
    const res: Product[] = [];
    let create = spyOn(productService, 'getAllProducts').and.returnValue(of(res))
    component.showProducts();
    fixture.detectChanges();
    expect(create).toBeTruthy();
  });

  it('should showProducts error', () => {
    let create = spyOn(productService, 'getAllProducts').and.returnValue(throwError({status: 404}));
    component.showProducts();
    fixture.detectChanges();
    expect(create).toBeTruthy();
  });

  it('should deleteProductFail', () => {
    const response: any = 'El producto no se eliminó'
    spyOn(productService, 'deleteProduct').and.returnValue(of(response))
    component.deleteProduct('374t4dsmd');
    fixture.detectChanges();
    expect(component.alertProduct).toEqual(response);
  });

  it('should deleteProductSuccess', () => {
    component.existProduct = true;
    const res: Product[] = [];
    let create = spyOn(productService, 'deleteProduct').and.returnValue(of(res))
    component.deleteProduct('374t4dsmd');
    fixture.detectChanges();
    expect(create).toBeTruthy();
  });

  it('should showProducts error', () => {
    let create = spyOn(productService, 'deleteProduct').and.returnValue(throwError({status: 404}));
    component.deleteProduct('374t4dsmd');
    fixture.detectChanges();
    expect(create).toBeTruthy();
  });

  it('should update', () => {
    let product: Product = new Product('12w34', 'jamon', 'de zenu', 3000, 'comida');;
    component.update(product);
  })
});
