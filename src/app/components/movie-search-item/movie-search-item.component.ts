import { Component, Input } from '@angular/core';
import { MovieDetails } from 'src/app/models/movieDetails';
import { MovieItem } from 'src/app/models/movieItem';

@Component({
  selector: 'app-movie-search-item',
  templateUrl: './movie-search-item.component.html',
  styleUrls: ['./movie-search-item.component.css']
})
export class MovieSearchItemComponent {
@Input() movie! : MovieItem | MovieDetails; 
}
