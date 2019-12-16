
import { ProdutosService } from './produtos.service.service';


import { TestBed, async, inject } from '@angular/core/testing';


describe('ProdutosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProdutosService]
    });
  });

  it('should ...', inject([ProdutosService], (service: ProdutosService) => {
    expect(service).toBeTruthy();
  }));
});
