import { Component, OnInit, Input } from '@angular/core';
import { Game } from 'src/app/models/Game';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  @Input() games: Game;

  constructor() { }

  ngOnInit() {
  }

}
