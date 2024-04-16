import { TestBed } from '@angular/core/testing';

import { InventoryDetailService } from './inventory-detail.service';

describe('InventoryDetailService', () => {
  let service: InventoryDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InventoryDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
