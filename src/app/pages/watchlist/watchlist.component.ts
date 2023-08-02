import { Component } from '@angular/core';
import { MovieDetails } from 'src/app/models/movieDetails';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent {

  savedMovies: any[] = [];
  movies: any[] = [];

  isLoading: boolean = false;

  constructor(private dataService: MoviesService) { }

  ngOnInit() {
    this.savedMovies = JSON.parse(localStorage.getItem('movies') || "[]");
    this.getMovies(); 
  }

  getMovies() {
    this.isLoading = true;
    this.savedMovies.forEach((movieId) => {
      this.dataService.getDetailsById(movieId).subscribe(data => { this.movies.push(data); })
    })
    this.isLoading = false;
  }

}
