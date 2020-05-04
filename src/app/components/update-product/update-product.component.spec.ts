import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { UpdateProductComponent } from './update-product.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule } from '@angular/forms';
import { ProductService } from 'src/app/services/product.service';
import { of, throwError } from 'rxjs';
import { Product } from 'src/app/models/product';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';

fdescribe('UpdateProductComponent', () => {
  let component: UpdateProductComponent;
  let fixture: ComponentFixture<UpdateProductComponent>;
  let productService;
  let element;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateProductComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        FormsModule
      ],
      providers: [
        {provide: HttpClientModule},
        { provide: ProductService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(inject([ProductService], s => {
    productService = s;
    fixture = TestBed.createComponent( UpdateProductComponent );
    component = fixture.componentInstance;
    element = fixture.nativeElement;
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getProductByIdSuccess', () => {
    const id = 'fds3e4rd'
    const res: Product = new Product('', '', '', null, '');
    spyOn(productService, 'getProductById').and.returnValue(of(res))
    component.getProductById(id);
    fixture.detectChanges();
    expect(component.product).toEqual(res);
  });

  it('should getProductById error', () => {
    const id = 'fds3e4rd'
    let create = spyOn(productService, 'getProductById').and.returnValue(throwError({status: 404}));
    component.getProductById(id);
    fixture.detectChanges();
    expect(create).toBeTruthy();
  });

  it('should updateProductFail', () => {
    const id = 'fds3e4rd'
    const response: any = 'No se actualizó el producto'
    spyOn(productService, 'updateProduct').and.returnValue(of(response))
    component.updateProduct(id);
    fixture.detectChanges();
    expect(component.productUpdate).toEqual(response);
  });

  it('should updateProductSuccess', () => {
    const id = 'fds3e4rd'
    const response: any = 'El producto se ha creado correctamente';
    const res: Product = new Product('', '', '', null, '');
    let create = spyOn(productService, 'updateProduct').and.returnValue(of(res))
    component.updateProduct(id);
    fixture.detectChanges();
    expect(create).toBeTruthy();
  });

  it('should updateProduct error', () => {
    const id = 'fds3e4rd'
    let create = spyOn(productService, 'updateProduct').and.returnValue(throwError({status: 404}));
    component.updateProduct(id);
    fixture.detectChanges();
    expect(create).toBeTruthy();
  });
});
