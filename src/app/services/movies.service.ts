import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiKey: string = "c9248c6c02240338f7a7a2b49f34cb77"
  constructor(private http: HttpClient) { }


  getTopMovies() {
    return this.http.get<any>("https://api.themoviedb.org/3/movie/popular?api_key=" + this.apiKey)
  }

  getNowPlayingMovies() {
    return this.http.get<any>("https://api.themoviedb.org/3/movie/now_playing?api_key=" + this.apiKey)
  }

  getTopRatedgMovies() {
    return this.http.get<any>("https://api.themoviedb.org/3/movie/top_rated?api_key=" + this.apiKey)
  }

  getPopularMovies() {
    return this.http.get<any>("https://api.themoviedb.org/3/movie/popular?api_key=" + this.apiKey)
  }

  getMoviesByCategory(category: string){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${category}?api_key=` + this.apiKey)
  }
}
