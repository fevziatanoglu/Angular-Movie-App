import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetails } from 'src/app/models/movieDetails';
import { Review } from 'src/app/models/movieReview';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {

  movie!: MovieDetails;
  movieId: string = "";
  reviews: Review[] = [];

  tabs: string[] = ["About Movie", "Reviews", "Cast"]
  currentTab: string = "About Movie";

  savedMovies: string[] = [];
  isLoading: boolean = false;

  constructor(private dataService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.savedMovies = JSON.parse(localStorage.getItem("movies") || "[]");
    this.route.params.subscribe(params => this.movieId = params["id"]);

    this.getDetails(this.movieId);
    this.getReview(this.movieId);
  }

  getDetails(id: string) {
    this.isLoading = true;
    this.dataService.getDetailsById(id).subscribe((data: any) => {
      this.movie = data;
      console.log(this.movie);
      this.isLoading = false;
    })

  }

  getReview(id: string) {
    this.isLoading = true;
    this.dataService.getReviewById(id).subscribe((data:any) => {
      this.reviews = data.results;
      this.isLoading = false;
    });
  }


  isTabActive(tab: string): boolean {
    return this.currentTab === tab;
  }

  setTab(tab: string) {
    this.currentTab = tab;
  }

  addMovieLocalStorage() {
    if (this.savedMovies.includes(this.movieId)) {
      this.savedMovies = this.savedMovies.filter(movieId => movieId !== this.movieId);
    } else {
      this.savedMovies.push(this.movieId);
    }
    localStorage.setItem('movies', JSON.stringify(this.savedMovies));
  }











}
