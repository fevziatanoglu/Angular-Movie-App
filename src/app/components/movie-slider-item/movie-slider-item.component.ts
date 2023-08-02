import { Component , Input } from '@angular/core';
import { MovieItem } from 'src/app/models/movieItem';

@Component({
  selector: 'app-movie-slider-item',
  templateUrl: './movie-slider-item.component.html',
  styleUrls: ['./movie-slider-item.component.css']
})
export class MovieSliderItemComponent {

  @Input() movie! : MovieItem;
  @Input() number: number = 0;

}
