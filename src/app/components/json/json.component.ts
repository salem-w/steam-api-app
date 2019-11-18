import { Component, OnInit } from '@angular/core';
import JsonFile from '../../../assets/data.json'

@Component({
  selector: 'app-json',
  templateUrl: './json.component.html',
  styleUrls: ['./json.component.css']
})
export class JsonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log(JsonFile);
  }

}
