import { TestBed } from '@angular/core/testing';

import { MultiselectuiLibService } from './multiselectui-lib.service';

describe('MultiselectuiLibService', () => {
  let service: MultiselectuiLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MultiselectuiLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
