import { TestBed } from '@angular/core/testing';

import { DesignToolService } from './design-tool.service';

describe('DesignToolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DesignToolService = TestBed.get(DesignToolService);
    expect(service).toBeTruthy();
  });
});
