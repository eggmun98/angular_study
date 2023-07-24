import { TestBed } from '@angular/core/testing';

import { QqqService } from './qqq.service';

describe('QqqService', () => {
  let service: QqqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QqqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
