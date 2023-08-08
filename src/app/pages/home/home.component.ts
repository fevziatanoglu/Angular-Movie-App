import { Component } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  top10: any[] = [];

  query: string = '';
  isLoading: boolean = false;

  constructor(private dataService: MoviesService){

  }

  ngOnInit(){

    this.getTop10();
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


}
