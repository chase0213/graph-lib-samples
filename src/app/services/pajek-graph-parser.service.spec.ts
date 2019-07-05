import { TestBed } from '@angular/core/testing';

import { PajekGraphParserService } from './pajek-graph-parser.service';

describe('PajekGraphParserService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PajekGraphParserService = TestBed.get(PajekGraphParserService);
    expect(service).toBeTruthy();
  });
});
