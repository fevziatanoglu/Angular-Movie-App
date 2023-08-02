import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Cast } from 'src/app/models/movieCredits';
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
  casts : Cast[] = [];

  headerTitle : string = "Details"
  headerButtonImg : string = "../../../assets/images/Save-Button.svg"

  tabs: string[] = ["About Movie", "Reviews", "Cast"]
  currentTab: string = "Cast";

  savedMovies: string[] = [];
  isLoading: boolean = false;

  constructor(private dataService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.savedMovies = JSON.parse(localStorage.getItem("movies") || "[]");
    if(this.savedMovies.includes(this.movieId)){this.headerButtonImg = "../../../assets/images/Star.svg"};
    this.route.params.subscribe(params => this.movieId = params["id"]);
 
    this.getDetails(this.movieId);
    this.getReview(this.movieId);
    this.getCredits(this.movieId);
  }

  getDetails(id: string) {
    this.isLoading = true;
    this.dataService.getDetailsById(id).subscribe((data: any) => {
      this.movie = data;
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

  getCredits(id: string) {
    this.dataService.getCreditsById(id).subscribe((data:any) => {
      this.casts = data.cast.slice(0,10);
      console.log(this.casts);
    })
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
      this.headerButtonImg = "../../../assets/images/Save-Button.svg"
    } else {
      this.savedMovies.push(this.movieId);
      this.headerButtonImg = "../../../assets/images/Star.svg"

    }
    localStorage.setItem('movies', JSON.stringify(this.savedMovies));
  }











}
