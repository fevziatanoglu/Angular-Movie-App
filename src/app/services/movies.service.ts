import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiKey: string = "?api_key=c9248c6c02240338f7a7a2b49f34cb77"
  constructor(private http: HttpClient) { }


  getTopMovies() {
    return this.http.get<any>("https://api.themoviedb.org/3/movie/popular" + this.apiKey)
  }

  getNowPlayingMovies() {
    return this.http.get<any>("https://api.themoviedb.org/3/movie/now_playing" + this.apiKey)
  }

  getTopRatedgMovies() {
    return this.http.get<any>("https://api.themoviedb.org/3/movie/top_rated" + this.apiKey)
  }

  getPopularMovies() {
    return this.http.get<any>("https://api.themoviedb.org/3/movie/popular" + this.apiKey)
  }

  getMoviesByCategory(category: string){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${category}` + this.apiKey)
  }

  getDetailsById(movieId: string){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${movieId}language=en-US` + this.apiKey)
  }

  getReviewById(movieId: string){
    return this.http.get<any>(`https://api.themoviedb.org/3/movie/${movieId}/reviews` + this.apiKey)
  }

  searchMovie(query: string){
    return this.http.get<any>("https://api.themoviedb.org/3/search/movie" + this.apiKey + "&query=" + query)
  }
}
