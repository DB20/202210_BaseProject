/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CafeService } from './cafe.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';


describe('Service: Cafe', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CafeService]
    });
  });

  it('should ...', inject([CafeService], (service: CafeService) => {
    expect(service).toBeTruthy();
  }));
});
