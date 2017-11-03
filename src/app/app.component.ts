import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'app works!';
  public sideShow:boolean = false;

  handleClick(){
  	this.sideShow = !this.sideShow;
  }
}
