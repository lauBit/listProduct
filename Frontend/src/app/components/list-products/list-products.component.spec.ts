import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductsComponent } from './list-products.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductService } from 'src/app/services/product.service';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

fdescribe('ListProductsComponent', () => {
  let component: ListProductsComponent;
  let fixture: ComponentFixture<ListProductsComponent>;
  let mockProductService: ProductService;
  let service: ProductService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListProductsComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ],
      providers: [
        { provide: ProductService}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.get(ProductService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should delete', () => {
    expect(component.deleteProduct).toBeTruthy();
  })
});
