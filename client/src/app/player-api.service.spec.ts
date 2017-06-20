import { TestBed, inject } from '@angular/core/testing';

import { PlayerApiService } from './player-api.service';

describe('PlayerApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlayerApiService]
    });
  });

  it('should be created', inject([PlayerApiService], (service: PlayerApiService) => {
    expect(service).toBeTruthy();
  }));
});
