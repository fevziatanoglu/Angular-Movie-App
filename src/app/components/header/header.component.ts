import { Location } from '@angular/common';
import { Component , Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() title : string = "";
  @Input() buttonImgUrl : string = "";
  @Output() buttonFunction = new EventEmitter();

  constructor(private location: Location){}

  goBack(){ 
    this.location.back();
  }
}
