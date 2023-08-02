import { Component, Input } from '@angular/core';
import { MovieItem } from 'src/app/models/movieItem';

@Component({
  selector: 'app-movie-list-item',
  templateUrl: './movie-list-item.component.html',
  styleUrls: ['./movie-list-item.component.css']
})
export class MovieListItemComponent {
  @Input() movie!: MovieItem;
}
