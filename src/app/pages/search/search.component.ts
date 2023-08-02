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

  constructor(private dataService: MoviesService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe(params => this.searchString = params["query"]);
    if (this.searchString) { this.search(); }
  }


  search() {
    this.dataService.searchMovie(this.searchString).subscribe(data => {
      this.searchMovies = data.results.slice(0, 5);

      if (this.searchMovies.length === 0) { this.isNoResult = true; }
      else { this.isNoResult = false; }

    });
  }

  handleSearch() {
    if (this.searchString.length > 1) { this.search(); }
  }

  setSearchString(query: string) { this.searchString = query; }
}
