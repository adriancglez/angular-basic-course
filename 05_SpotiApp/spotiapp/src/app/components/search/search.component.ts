import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public artistas: any[] = [];
  public loading: boolean;

  constructor(private spotifyService: SpotifyService) {
  }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    if (!termino) {
      this.loading = false;
    } else {
      this.loading = true;
    }
    return this.spotifyService.getArtistas(termino).subscribe((data: any) => {
      this.artistas = data;
      this.loading = false;
    });
  }
}
