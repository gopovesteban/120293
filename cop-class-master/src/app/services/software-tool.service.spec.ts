import { TestBed } from '@angular/core/testing';

import { SoftwareToolService } from './software-tool.service';

describe('SoftwareToolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SoftwareToolService = TestBed.get(SoftwareToolService);
    expect(service).toBeTruthy();
  });
});
