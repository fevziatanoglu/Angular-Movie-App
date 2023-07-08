import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  movieId: string = "";
  movie: any;
  reviews: any[] = [];

  tabs: string[] = ["About Movie", "Reviews", "Cast"]
  currentTab: string = "About Movie";

  savedMovies: any[] = [];

  constructor(private dataService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.savedMovies = JSON.parse(localStorage.getItem("movies") || "[]");
    
    this.route.params.subscribe(params => this.movieId = params["id"]);
    this.getDetails(this.movieId);
    this.getReview(this.movieId);
  }

  getDetails(id: string) {
    this.dataService.getDetailsById(id).subscribe(data => { this.movie = data; console.log(data); })
  }

  getReview(id: string) {
    this.dataService.getReviewById(id).subscribe(data => { console.log(data); this.reviews = data.results });
  }


  isTabActive(tab: string): boolean {
    return this.currentTab === tab;
  }

  setTab(tab: string) {
    this.currentTab = tab;
  }

  addMovieLocalStorage() {
    if (this.savedMovies.includes(this.movieId)) {
      console.log("Movie removed saved movies");
      this.savedMovies = this.savedMovies.filter(movieId => movieId !== this.movieId );
    } else {
      this.savedMovies.push(this.movieId);
      console.log("Movie added saved movies");
    }
    localStorage.setItem('movies', JSON.stringify(this.savedMovies));
  }











}
