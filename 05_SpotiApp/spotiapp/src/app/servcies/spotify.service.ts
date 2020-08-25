import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient){}


  getNewReleases() {

    const headers = new HttpHeaders({
      'Authorization': 'Bearer BQCUTwHnh1SXrHAsIyASxvW5QbuJVBVylaOSChmySAF4bJnu3Jw4skYlkD9k9IkZFk0oG3M3gwGG7MgX-Vs'
    });
    this.http.get('https://api.spotify.com/v1/browse/new-releases?limit=5', {headers}).subscribe((data: any) => {
      console.log(data);
    });
  }
}
