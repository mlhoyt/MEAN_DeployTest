import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Input } from '@angular/core';
import { Player } from '../../player';
import { AllPlayersDataService } from '../../all-players-data.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-rankings',
  templateUrl: './rankings.component.html',
  styleUrls: ['./rankings.component.css']
})
export class RankingsComponent implements OnInit, OnDestroy {
  all_players: Array<Player>;

  subscription: Subscription;

  constructor(
    private _allPlayersDataService: AllPlayersDataService,
  )
  {
    this.subscription = this._allPlayersDataService.subject
      .subscribe( data => { this.all_players = data; }, err => {}, () => {} );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
