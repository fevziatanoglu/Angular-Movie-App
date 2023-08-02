import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { enviroment } from '../enviroments/enviroment';
import { MovieDetails } from '../models/movieDetails';
import { Observable } from 'rxjs';
import { Review } from '../models/movieReview';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  apiKey: string = "?api_key=c9248c6c02240338f7a7a2b49f34cb77"
  constructor(private http: HttpClient) { }


  getTopMovies() {
    return this.http.get<any>(enviroment.apiUrl + "/movie/popular?api_key=" + enviroment.apiKey)
  }

  getNowPlayingMovies() {
    return this.http.get<any>(enviroment.apiUrl + "/movie/now_playing?api_key=" +  enviroment.apiKey)
  }

  getTopRatedgMovies() {
    return this.http.get<any>(enviroment.apiUrl + "/movie/top_rated?api_key=" +  enviroment.apiKey)
  }

  getPopularMovies() {
    return this.http.get<any>(enviroment.apiUrl + "/movie/popular?api_key=" +  enviroment.apiKey)
  }

  getMoviesByCategory  (category: string){
    return  this.http.get<any>(enviroment.apiUrl + `/movie/${category}?api_key=` +  enviroment.apiKey)
  }

  getDetailsById(movieId: string) : Observable<MovieDetails>{
    return this.http.get<MovieDetails>(enviroment.apiUrl + `/movie/${movieId}language=en-US?api_key=` +  enviroment.apiKey)
  }

  getReviewById(movieId: string) : Observable<Review>{
    return this.http.get<Review>(enviroment.apiUrl + `/movie/${movieId}/reviews?api_key=` +  enviroment.apiKey)
  }

  searchMovie(query: string){
    return this.http.get<any>(enviroment.apiUrl + "/search/movie?api_key=" +  enviroment.apiKey + "&query=" + query)
  }
}
