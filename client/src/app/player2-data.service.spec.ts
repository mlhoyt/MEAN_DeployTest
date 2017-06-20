import { TestBed, inject } from '@angular/core/testing';

import { Player2DataService } from './player2-data.service';

describe('Player2DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Player2DataService]
    });
  });

  it('should be created', inject([Player2DataService], (service: Player2DataService) => {
    expect(service).toBeTruthy();
  }));
});
