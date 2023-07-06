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

  constructor(private dataService: MoviesService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => this.movieId = params["id"]);
    this.getDetails(this.movieId);
    this.getReview(this.movieId);
  }

  getDetails(id: string) {
    this.dataService.getDetailsById(id).subscribe(data => { this.movie = data; })
  }

  getReview(id: string) {
    this.dataService.getReviewById(id).subscribe(data => { console.log(data); this.reviews = data.results });
  }
  

  isTabActive(tab:string):boolean{
    return this.currentTab === tab;
  }

  setTab(tab:string){
    this.currentTab = tab;
  }

}
