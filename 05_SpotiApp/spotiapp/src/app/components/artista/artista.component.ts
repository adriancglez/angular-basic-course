import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html'
})
export class ArtistaComponent implements OnInit {

  private id: string;
  public artista: any = {};
  public isLoading: boolean;
  public canciones: any[] = [];

  constructor(private router: ActivatedRoute, private spotifyService: SpotifyService) {
    this.isLoading = true;
    this.router.params.subscribe(params => {
      this.id = params['id'];
      this.getArtista(this.id);
      this.getCanciones(this.id);
    });
  }

  ngOnInit(): void {
  }

  getArtista(id: string) {
    this.spotifyService.getArtista(id).subscribe(artista => {
      console.log(artista);
      this.artista = artista;
      this.isLoading = false;
    });
  }

  getCanciones(id: string) {
    this.spotifyService.getCancionesPorArtista(id).subscribe(canciones => {
      this.canciones = canciones;
      console.log(this.canciones);
    });
  }
}
