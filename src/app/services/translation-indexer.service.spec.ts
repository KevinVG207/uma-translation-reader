import { TestBed } from '@angular/core/testing';

import { TranslationIndexerService } from './translation-indexer.service';

describe('TranslationIndexerService', () => {
  let service: TranslationIndexerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslationIndexerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
