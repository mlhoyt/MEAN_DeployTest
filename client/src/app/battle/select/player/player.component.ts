import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Player } from '../../../player';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input() label;
  @Input() player: Player;
  @Output() get_user_event = new EventEmitter();
  error_msg: string = "";

  constructor() { }

  ngOnInit() {
  }

  onClickGetUser() {
    this.error_msg = "Github username '" + this.player.username + "' does not exit!";
    this.player.isInvalid = undefined;
    this.player.isLoaded = undefined;
    this.get_user_event.emit( this.player );
  }
}
