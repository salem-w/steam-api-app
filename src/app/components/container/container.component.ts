import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/Game';

import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {
  games:Game[];

  constructor(private gameService:GameService) { }

  ngOnInit() {
    
    this.gameService.getGames().subscribe(games => {
      this.games = games
      
    });
    /*
   this.games = [
     {
      name: "Dota 2",
      appid: 570,
      price: "$59.99",
      average_2weeks: 2000,
      imgUrl: "https://steamcdn-a.akamaihd.net/steam/apps/570/header.jpg"
     },
     {
      name: "CS: Go",
      appid: 730,
      price: "$59.99",
      average_2weeks: 2000,
      imgUrl: "https://steamcdn-a.akamaihd.net/steam/apps/730/header.jpg"
     },
     {
      name: "TF2",
      appid: 440,
      price: "$59.99",
      average_2weeks: 2000,
      imgUrl: "https://steamcdn-a.akamaihd.net/steam/apps/440/header.jpg"
     }
   ]*/
  }

}
