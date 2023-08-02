import { Component } from '@angular/core';
import { MovieItem } from 'src/app/models/movieItem';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-top10-categories',
  templateUrl: './top10-categories.component.html',
  styleUrls: ['./top10-categories.component.css']
})
export class Top10CategoriesComponent {

  categories: any[] = [{ title: "Popular", tab: "popular" }, { title: "Top Rated", tab: "top_rated" }, { title: "Now Playing", tab: "now_playing" }, { title: "Up Coming", tab: "upcoming" }];
  currentCategory: string = "popular";

  movies: MovieItem[] = [];

  constructor(private dataService: MoviesService) {

  }

  ngOnInit() {
    this.getMovies(this.currentCategory);
  }

  getMovies(category: string) {
    this.dataService.getMoviesByCategory(category).subscribe(data => {  this.movies = data.results;  });
  }

  setCategory(category: string) {
    this.currentCategory = category;
    this.getMovies(this.currentCategory);
  }

  isTagActive(category: string): boolean {
    return category === this.currentCategory
  }



}
