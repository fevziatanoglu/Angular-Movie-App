import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent {

  savedMovies: any[] = [];
  movies: any[] = [];
  //  JSON.parse(localStorage.getItem('myData'));

  constructor(private dataService: MoviesService) { }

  ngOnInit() {
    this.savedMovies = JSON.parse(localStorage.getItem('movies') || "[]");

    this.getMovies(); 

  

  }

  getMovies() {

    this.savedMovies.forEach((movieId) => {
      this.dataService.getDetailsById(movieId).subscribe(data => { this.movies.push(data); })
    })

  }

}
