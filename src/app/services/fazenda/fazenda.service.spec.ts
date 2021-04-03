import { TestBed } from '@angular/core/testing';

import { FazendaServiceService } from './fazenda.service';

describe('FazendaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FazendaServiceService = TestBed.get(FazendaServiceService);
    expect(service).toBeTruthy();
  });
});
