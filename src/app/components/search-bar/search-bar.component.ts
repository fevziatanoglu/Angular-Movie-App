import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  @Input() title : string = "";

  query : string = "";
  
  setQuery(query: string){
    this.query = query;
  }
}
