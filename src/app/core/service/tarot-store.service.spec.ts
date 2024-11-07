import { TestBed } from '@angular/core/testing';

import { TarotStoreService } from './tarot-store.service';

describe('TarotStoreService', () => {
  let service: TarotStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TarotStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
