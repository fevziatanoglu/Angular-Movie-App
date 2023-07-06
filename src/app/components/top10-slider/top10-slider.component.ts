import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-top10-slider',
  templateUrl: './top10-slider.component.html',
  styleUrls: ['./top10-slider.component.css']
})
export class Top10SliderComponent {

  top10: any[] = [];
  sliderTransform : number = 0;

  constructor(private dataService: MoviesService) {

  }

  ngOnInit() {
    this.getTop10();
  }

  getTop10() {
    console.log("test");
    this.dataService.getTopMovies().subscribe((data: any) => { console.log(data); this.top10 = data.results.slice(0, 10); });
  }


  slideLeftButton() {
    if (this.sliderTransform < 0) {
      this.sliderTransform += 250;
    }
  }

  slideRightButton() {
    if (this.sliderTransform > -1750) {
      console.log("slide right")
      this.sliderTransform -= 250;
    }
  }

}
