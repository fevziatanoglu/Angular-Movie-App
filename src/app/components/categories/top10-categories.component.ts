import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Tab } from 'src/app/models/categorieTabs';
import { MovieItem } from 'src/app/models/movieItem';


@Component({
  selector: 'app-top10-categories',
  templateUrl: './top10-categories.component.html',
  styleUrls: ['./top10-categories.component.css']
})
export class Top10CategoriesComponent {

  @Input() categories: Tab[] = [];
  @Input() currentCategory: string = "";
  @Input() movies: MovieItem[] = [];
  @Output() setCategory: EventEmitter<string> = new EventEmitter();


  constructor() {

  }

  ngOnInit() {
   
  }

   // check tab buttons
   isTagActive(category: string): boolean {return category === this.currentCategory;}




}
