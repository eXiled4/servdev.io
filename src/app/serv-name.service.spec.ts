import { TestBed } from '@angular/core/testing';

import { ServNameService } from './serv-name.service';

describe('ServNameService', () => {
  let service: ServNameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServNameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
