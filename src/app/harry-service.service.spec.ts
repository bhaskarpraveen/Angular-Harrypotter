import { TestBed } from '@angular/core/testing';

import { HarryServiceService } from './harry-service.service';

describe('HarryServiceService', () => {
  let service: HarryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HarryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
