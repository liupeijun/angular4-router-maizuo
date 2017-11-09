import { Component, OnInit ,Inject,ViewEncapsulation} from '@angular/core';
import * as moment from 'moment'; //引入moment 库

@Component({
  selector: 'app-nowplaying',
  templateUrl: './nowplaying.component.html',
  styleUrls: ['./nowplaying.component.scss'],
  encapsulation:ViewEncapsulation.Native //shadow dom
})
export class NowplayingComponent implements OnInit {

  constructor(@Inject('httpService') private http, @Inject("messageService") private message ) { }
  datalist:Array<any> = [];

  ngOnInit() {
  	this.http.get("/film/now-playing?__t=1509691007757&page=1&count=7").then(result=>{
      // console.log(result);
      this.datalist = result.data.films;
    })
  }

  handleClick(name){
    this.message.sendMessage(name);
  }

  getDate(date){
    return moment(date).format('M月DD日上映')
  }

}
