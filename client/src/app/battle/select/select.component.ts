import { Component, OnInit } from '@angular/core';
import { OnDestroy } from '@angular/core';
import { Input } from '@angular/core';
import { Player } from '../../player';
import { Player1DataService } from '../../player1-data.service';
import { Player2DataService } from '../../player2-data.service';
import { AllPlayersDataService } from '../../all-players-data.service';
import { Subscription } from 'rxjs/Subscription';
import { GithubApiService } from '../../github-api.service';
import { PlayerApiService } from '../../player-api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit, OnDestroy {
  player1: Player;
  player2: Player;
  all_players: Array<Player>;

  p1subscription: Subscription;
  p2subscription: Subscription;
  allPlayersSubscription: Subscription;

  constructor(
    private _player1DataService: Player1DataService,
    private _player2DataService: Player2DataService,
    private _allPlayersDataService: AllPlayersDataService,
    private _githubApi: GithubApiService,
    private _playerApi: PlayerApiService,
    private _router: Router,
  )
  {
    this.p1subscription = this._player1DataService.subject
      .subscribe( data => { this.player1 = data; }, err => {}, () => {} );
    this.p2subscription = this._player2DataService.subject
      .subscribe( data => { this.player2 = data; }, err => {}, () => {} );
    this.allPlayersSubscription = this._allPlayersDataService.subject
      .subscribe( data => { this.all_players = data; }, err => {}, () => {} );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.p1subscription.unsubscribe();
    this.p2subscription.unsubscribe();
    this.allPlayersSubscription.unsubscribe();
  }

  onClickBattleButton() {
    this._router.navigate( ['/results'] );
  }
  
  get_all_players() {
    this._playerApi.read_all()
      .catch( err => { console.log( "Error: AppSelectComponent: get_all_players:", err ); } )
      .then( data => {
        this.all_players = data;
        this._allPlayersDataService.subject.next( this.all_players );
      });
  }

  have_player( player: Player ) {
    for( let i = 0; i < this.all_players.length; ++i ) {
      if( this.all_players[ i ].username === player.username ) {
        player.avatar_url = this.all_players[ i ].avatar_url;
        player.score = this.all_players[ i ].score;
        player.isInvalid = false;
        player.isLoaded = true;
        return( true );
      }
    }
    return( false );
  }

  get_user( player: Player ) {
    if( ! this.have_player( player ) ) {
      this._githubApi.read_user( player.username )
        .catch( err => {
          console.log( "Error: AppSelectComponent: get_user:", player.username, "not found!" );
          player.avatar_url = "";
          player.score = 0;
          player.isInvalid = true;
          player.isLoaded = false;
        })
        .then( data => {
          if( ! player.isInvalid ) {
            player.avatar_url = data.avatar_url;
            player.score = (data.followers + data.public_repos) * 12;
            player.isInvalid = false;
            player.isLoaded = true;

            this._playerApi.create( player )
              .catch( err => { console.log( "Error: AppSelectComponent: get_user: create_player:", err ); } )
              .then( () => { this.get_all_players(); } );
          }
        });
    }
  }
}
