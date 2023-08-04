import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchString: string = "";
  searchMovies: any[] = [];
  isNoResult: boolean = false;

  headerTitle : string = "Search";
  headerButtonImg : string = "../../../assets/images/Info-Button.svg";

  isLoading : boolean = false;

  constructor(private dataService: MoviesService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => this.searchString = params["query"]);
    if (this.searchString) { this.search(); }
  }


  search() {
    this.isLoading = true;
    this.dataService.searchMovie(this.searchString).subscribe(data => {
      this.searchMovies = data.results.slice(0, 10);
      if (this.searchMovies.length === 0) { this.isNoResult = true; }
      else { this.isNoResult = false; }
      this.isLoading = false;
    });
  }

  handleSearch() {
    if (this.searchString.length > 2) { this.search(); }
  }

  setSearchString(query: string) { this.searchString = query; }
}
