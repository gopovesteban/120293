import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { WorkerApiService } from './worker-api.service';

describe('WorkerApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: WorkerApiService = TestBed.get(WorkerApiService);
    expect(service).toBeTruthy();
  });
});
