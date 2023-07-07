import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchString: string = "";
  searchMovies: any[] = [{
    adult
      :
      false,
    backdrop_path
      :
      "/hZkgoQYus5vegHoetLkCJzb17zJ.jpg",
    id
      :
      550,
    original_language
      :
      "en",
    original_title
      :
      "Fight Club",
    overview
      :
      "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion."
   , popularity
      :
      68.13
    ,poster_path
      :
      "/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
    release_date
      :
      "1999-10-15",
    title
      :
      "Fight Club",
    video
      :
      false,
    vote_average
      :
      8.435,
    vote_count
      :
      26695
  }

  ];
  isNoResult: boolean = false;

  constructor(private dataService: MoviesService) {

  }

  ngOnInit() {
    // this.search("Fight");
  }


  search(query: string) {
    this.dataService.searchMovie(query).subscribe(data => {
      this.searchMovies = data.results.slice(0, 5);
      console.log(this.searchMovies);

      if (this.searchMovies.length === 0) {
        this.isNoResult = true;
      } else {
        this.isNoResult = false;
      }

    });
  }

  handleSearch() {

    if (this.searchString.length > 1) {
      this.search(this.searchString);
    }

    console.log(this.isNoResult)
  }

  setSearchString(query: string) {
    this.searchString = query;
  }
}
