import { TestBed, inject } from '@angular/core/testing';

import { AllPlayersDataService } from './all-players-data.service';

describe('AllPlayersDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AllPlayersDataService]
    });
  });

  it('should be created', inject([AllPlayersDataService], (service: AllPlayersDataService) => {
    expect(service).toBeTruthy();
  }));
});
