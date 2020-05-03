import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { AddProductComponent } from './add-product.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ProductService } from 'src/app/services/product.service';
import { HttpClient, HttpResponse, HttpClientModule } from '@angular/common/http';
import { of, throwError } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { Product } from 'src/app/models/product';

fdescribe('AddProductComponent', () => {
  let component: AddProductComponent;
  let fixture: ComponentFixture<AddProductComponent>;
  let productService;
  let element;

  beforeEach(async(() => {
    
    TestBed.configureTestingModule({
      declarations: [AddProductComponent],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule
      ],
      providers: [
        { provide: ProductService },
        { provide: HttpClientModule }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    productService = ProductService;
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  });

  beforeEach(inject([ProductService], s => {
    productService = s;
    fixture = TestBed.createComponent(AddProductComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should createProductFail', () => {
    const response: any = 'No se creo el producto'
    spyOn(productService, 'createProduct').and.returnValue(of(response))
    component.createProduct();
    fixture.detectChanges();
    expect(component.productCreate).toEqual(response);
  });

  it('should createProductSuccess', () => {
    const response: any = 'El producto se ha creado correctamente';
    const res: Product = new Product('12w34', 'jamon', 'de zenu', 3000, 'comida');
    let create = spyOn(productService, 'createProduct').and.returnValue(of(res))
    component.createProduct();
    fixture.detectChanges();
    expect(create).toBeTruthy();
  });

  it('should createProduct error', () => {
    let create = spyOn(productService, 'createProduct').and.returnValue(throwError({status: 404}));
    component.createProduct();
    fixture.detectChanges();
    expect(create).toBeTruthy();
  });

});
