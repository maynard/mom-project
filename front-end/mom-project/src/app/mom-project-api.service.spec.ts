import { TestBed } from '@angular/core/testing';

import { MomProjectApiService } from './mom-project-api.service';

describe('MomProjectApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MomProjectApiService = TestBed.get(MomProjectApiService);
    expect(service).toBeTruthy();
  });
});
