import { provideHttpClient, withFetch } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { mockedCookies } from '../data/MockedCookies';
import { ProductResponse, productService } from './productService';

describe('productService', () => {
  let service: productService;
  let httpTestingController: HttpTestingController; // C'est lui le STUB

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(withFetch()), provideHttpClientTesting()],
    });

    service = TestBed.inject(productService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should fetch and store products', () => {
    // const mockedCookiesResp = mockedCookies;
    const mockedCookiesResp: ProductResponse = { data: mockedCookies };

    service.fetchCookies().subscribe((mockedCookies) => {
      expect(mockedCookies).toEqual(mockedCookiesResp);
      expect(service.products()).toEqual(mockedCookiesResp.data);
    });

    const req = httpTestingController.expectOne('http://10.0.10.38:3000/cookie');
    expect(req.request.method).toEqual('GET');
    req.flush(mockedCookiesResp);

    httpTestingController.verify();
  });
});
