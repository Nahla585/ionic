import { TestBed } from '@angular/core/testing';

import { ReclamationServiceService } from './reclamations-service.service';

describe('ReclamationServiceService', () => {
  let service: ReclamationServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReclamationServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
