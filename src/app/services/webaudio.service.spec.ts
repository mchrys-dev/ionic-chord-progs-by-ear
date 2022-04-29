import { TestBed } from '@angular/core/testing';

import { WebaudioService } from './webaudio.service';

describe('WebaudioService', () => {
  let service: WebaudioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebaudioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
