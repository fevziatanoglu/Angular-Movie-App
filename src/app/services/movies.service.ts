import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { enviroment } from '../enviroments/enviroment';
import { MovieDetails } from '../models/movieDetails';
import { Observable } from 'rxjs';
import { Review } from '../models/movieReview';
import { MovieItem, MoviesData } from '../models/movieItem';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  constructor(private http: HttpClient) { }

  getMoviesByCategory  (category: string): Observable<MoviesData>{
    return  this.http.get<MoviesData>(enviroment.apiUrl + `/movie/${category}?api_key=` +  enviroment.apiKey)
  }

  getDetailsById(movieId: string) : Observable<MovieDetails>{
    return this.http.get<MovieDetails>(enviroment.apiUrl + `/movie/${movieId}language=en-US?api_key=` +  enviroment.apiKey)
  }

  getReviewById(movieId: string) : Observable<Review>{
    return this.http.get<Review>(enviroment.apiUrl + `/movie/${movieId}/reviews?api_key=` +  enviroment.apiKey)
  }

  searchMovie(query: string):Observable<MoviesData>{
    return this.http.get<MoviesData>(enviroment.apiUrl + "/search/movie?api_key=" +  enviroment.apiKey + "&query=" + query)
  }
}
