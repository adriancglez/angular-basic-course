import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient){}

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`;

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQD7VPDoMUTozrvt7-jFMPncbz9O6tjStsdN8fJ5z9w6wWzedEytGo9VPAf95PHQpRsIHfsDbnNy1re4JEg'
    });

    return this.http.get(url, { headers });
  }


  getNewReleases() {

    return this.getQuery('browse/new-releases?limit=20').pipe(map(data => data['albums'].items));
  }

  getArtistas(termino: string) {

    return this.getQuery(`search?q=${termino}&type=artist&limit=15`).pipe(map(data => data['artists'].items));
  }
}
