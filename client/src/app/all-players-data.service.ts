import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Player } from './player';

@Injectable()
export class AllPlayersDataService {
  subject = new BehaviorSubject( null );

  constructor() { }

  update( data: Array<Player> ) {
    this.subject.next( data );
  }
}

