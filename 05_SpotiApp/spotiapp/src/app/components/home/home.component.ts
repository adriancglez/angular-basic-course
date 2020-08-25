import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../servcies/spotify.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private spotify: SpotifyService) {
    this.spotify.getNewReleases();
  }

  ngOnInit(): void {
  }

}
