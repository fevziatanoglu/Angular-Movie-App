import { Location } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
 
  currentHref : string;

 constructor(private location:Location){
 this.currentHref = this.location.path()
 }

 isLinkActive(path : string) : boolean{
  return this.currentHref === path;
 }

}
