import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpClientModule } from '@angular/common/http';

fdescribe('ProductService', () => {
  let service: ProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ],
      providers: [
        {provide: HttpClientModule}
      ]
    });
    service = TestBed.inject(ProductService);
    
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
