import { TestBed, inject } from '@angular/core/testing';

import { Player1DataService } from './player1-data.service';

describe('Player1DataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Player1DataService]
    });
  });

  it('should be created', inject([Player1DataService], (service: Player1DataService) => {
    expect(service).toBeTruthy();
  }));
});
