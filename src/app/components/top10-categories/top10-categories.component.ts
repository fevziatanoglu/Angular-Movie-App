import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-top10-categories',
  templateUrl: './top10-categories.component.html',
  styleUrls: ['./top10-categories.component.css']
})
export class Top10CategoriesComponent {

  categories: any[] = [{ title: "Popular", tag: "popular" }, { title: "Top Rated", tag: "top_rated" }, { title: "Now Playing", tag: "now_playing" }, { title: "Up Coming", tag: "upcoming" }];
  currentCategory: string = "popular";

  movies: any[] = [];

  constructor(private dataService: MoviesService) {

  }

  ngOnInit() {
    this.getMovies(this.currentCategory);
  }

  getMovies(category: string) {
    this.dataService.getMoviesByCategory(category).subscribe(data => { this.movies = data.results.slice(0, 10); console.log(this.movies) });
  }

  setCategory(category: string) {
    this.currentCategory = category;
    this.getMovies(this.currentCategory);
  }

  isTagActive(category: string): boolean {
    return category === this.currentCategory
  }



}
