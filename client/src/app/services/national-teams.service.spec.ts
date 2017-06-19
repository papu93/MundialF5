import { TestBed, inject } from '@angular/core/testing';

import { NationalTeamsService } from './national-teams.service';

describe('NationalTeamsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NationalTeamsService]
    });
  });

  it('should be created', inject([NationalTeamsService], (service: NationalTeamsService) => {
    expect(service).toBeTruthy();
  }));
});
