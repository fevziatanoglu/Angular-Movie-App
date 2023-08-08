import { Component, Input, OnInit } from '@angular/core';
import { MovieItem } from 'src/app/models/movieItem';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-top10-slider',
  templateUrl: './top10-slider.component.html',
  styleUrls: ['./top10-slider.component.css']
})
export class Top10SliderComponent {

  @Input() top10: MovieItem[] = [];

  sliderTransform: number = 0;

  constructor(private dataService: MoviesService) {

  }

  ngOnInit() {
   
  }

 

  slideLeftButton() {
    if (this.sliderTransform < 0) {
      this.sliderTransform += 250;
    }
  }

  slideRightButton() {
    if (this.sliderTransform > -1750) {
      this.sliderTransform -= 250;
    }
  }

}
