import { TestBed, async } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: ProductService }
      ]
    });
    service = TestBed.get(ProductService)
    httpMock = TestBed.get(HttpTestingController);

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getProductById', () => {

    let id = '5eae39c975c92008f4dea409'
    service.getProductById(id).subscribe((data: any) => {
      expect(data.name).toBe('Jabón');
    });

    const req = httpMock.expectOne(`http://localhost:3977/api/product/${id}`);
    expect(req.request.method).toBe('GET');

    req.flush({
      name: 'Jabón'
    });

    httpMock.verify();
  });

  it('should createProduct', () => {
    service.createProduct<any>({name: 'Jamón', description:'Marca zenú', price: 3000, type:'Comida'}).subscribe((data: any) => {
      expect(data.name).toBe('Jamón');
      expect(data.description).toBe('Marca zenú');
      expect(data.price).toBe(3000);
      expect(data.type).toBe('Comida');
    })

    const req = httpMock.expectOne(`http://localhost:3977/api/product`);
    expect(req.request.method).toBe('POST');

    req.flush({
      name: 'Jamón',
      description: 'Marca zenú',
      price: 3000,
      type: 'Comida'
    });

    httpMock.verify();
  });

  it('should updateProduct', () => {

    let id = '5eae39c975c92008f4dea409'
    let productOne: {
      name: 'Mortadela',
      description: 'Marca zenú',
      price: 3000,
      type: 'Comida'
    }

    service.updateProduct<any>(id, {name: 'Mortadela', description:'Marca zenú', price: 3000, type:'Comida'}).subscribe((data: any) => {
      expect(data.name).toBe('Mortadela');
      expect(data.description).toBe('Marca zenú');
      expect(data.price).toBe(3000);
      expect(data.type).toBe('Comida');
    })

    const req = httpMock.expectOne(`http://localhost:3977/api/product/${id}`);
    expect(req.request.method).toBe('PUT');

    req.flush({
      name: 'Mortadela',
      description: 'Marca zenú',
      price: 3000,
      type: 'Comida'
    });

    httpMock.verify();
  })

  it('should deleteProoduct', () => {
    let id = '5eae39c975c92008f4dea409'
    service.deleteProduct(id).subscribe((data:any) => {
      expect(data).toBe(id);
    });
  
    const req = httpMock.expectOne(`http://localhost:3977/api/product/${id}`);
    expect(req.request.method).toBe('DELETE');
  
    req.flush('5eae39c975c92008f4dea409');
  
    httpMock.verify();
  })

});
