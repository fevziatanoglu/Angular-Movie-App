import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiKey:string = "c9248c6c02240338f7a7a2b49f34cb77"
  constructor(private http : HttpClient) { }


  getTopMovies(){
    return this.http.get<any>("https://api.themoviedb.org/3/movie/popular?api_key=" + this.apiKey)
  }

  
}
