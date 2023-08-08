import { Component } from '@angular/core';
import { Tab } from 'src/app/models/categorieTabs';
import { MovieItem } from 'src/app/models/movieItem';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // slider
  top10: any[] = [];

  // home movies list
  categories: Tab[] = [{ title: "Popular", tab: "popular" }, { title: "Top Rated", tab: "top_rated" }, { title: "Now Playing", tab: "now_playing" }, { title: "Up Coming", tab: "upcoming" }];
  currentCategory : string = "popular";
  movies: MovieItem[] = [];

  searchTitle: string = "What do you want to watch?"

  query: string = '';
  isLoading: boolean = false;

  constructor(private dataService: MoviesService){

  }

  ngOnInit(){

    this.getTop10();
    this.getMovies(this.currentCategory);
  }

  setQuery(query: string){
    this.query = query;
  }

  // slider top 10 films
  getTop10() {
    this.isLoading = true;
    this.dataService.getMoviesByCategory("popular").subscribe((data: any) => {
       this.top10 = data.results.slice(0, 10); 
        this.isLoading = false;
      });
  }

  // moves related category
  getMovies(category: string) {
    this.isLoading = true;
    this.dataService.getMoviesByCategory(category).subscribe(data => { 
       this.movies = data.results; 
        this.isLoading = false;
      });
  }

  // set category
  setCategory(category: string) {
    this.currentCategory = category;
    this.getMovies(this.currentCategory);
  }

 

}
