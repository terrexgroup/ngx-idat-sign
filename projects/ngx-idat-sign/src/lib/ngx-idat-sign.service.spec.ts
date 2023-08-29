import { TestBed } from '@angular/core/testing';

import { NgxIdatSignService } from './ngx-idat-sign.service';

describe('NgxIdatSignService', () => {
  let service: NgxIdatSignService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxIdatSignService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
