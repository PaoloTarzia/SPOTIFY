import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Dichiaro che il servizio è iniettabile agli altri componenti a partire dal componente root
@Injectable({
  providedIn: 'root'  
})
export class SpotifyService {
   //url per oauth: https://developer.spotify.com/console/get-search-item/
  //Ottengo il modulo HttpClient
  constructor(private http: HttpClient) { }

  searchTrack(query: string) {
    const url = `https://api.spotify.com/v1/search?q=${query}&type=track`;
    const headers = new HttpHeaders({
      Authorization:
        'Bearer BQAyO6v6B2ZYzYJ28WA5oMQkgyDbJHc8DUq6u8mSoNWWRN9TgOv_DnM8HBJ9SRf5t_0pKdnrcC8Iv1gtadrh0d4_9lgSZXM48bVsJKVw-4qlvvDQC67aOYLp8OiXwAMwxZv57IVhnZcKpoY2m-TpmQDBhgq-7f3N7MFkpv3iIDNLGMLZpgs8zYvq1dvn9HqbOcTUbcM8fYbXGGTM208'
    });

    let obsTracks = this.http.get(url, { headers });
    return obsTracks;
 //Ritorno un observable ai componenti che richiedono il servizio
  }
}

