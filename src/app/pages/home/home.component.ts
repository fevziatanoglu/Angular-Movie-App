import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  
  query: string = '';
  isLoading: boolean = false;

  setQuery(query: string){
    this.query = query;
  }

}
