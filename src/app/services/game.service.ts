import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Game } from '../models/Game';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class GameService {
  //gamesUrl:string = "steamspy.com/api.php?request=appdetails&appid=730";
  gamesUrl:string = "https://jsonplaceholder.typicode.com/posts";
  constructor(private http:HttpClient) { }

  getGames():Observable<Game[]> {
    return this.http.get<Game[]>('./assets/data.json');

  }
}
