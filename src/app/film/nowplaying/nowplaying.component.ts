import { Component, OnInit ,Inject} from '@angular/core';

@Component({
  selector: 'app-nowplaying',
  templateUrl: './nowplaying.component.html',
  styleUrls: ['./nowplaying.component.scss']
})
export class NowplayingComponent implements OnInit {

  constructor(@Inject('httpService') private http) { }
  datalist:Array<any> = [];

  ngOnInit() {
  	this.http.get("/film/now-playing?__t=1509691007757&page=1&count=7").then(result=>{
      // console.log(result);
      this.datalist = result.data.films;
    })
  }

  handleClick(id){
  	// console.log(id)
  }

}
