import { TestBed } from '@angular/core/testing';

import { NgNishaanAlertService } from './ng-nishaan-alert.service';

describe('NgNishaanAlertService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgNishaanAlertService = TestBed.get(NgNishaanAlertService);
    expect(service).toBeTruthy();
  });
});
