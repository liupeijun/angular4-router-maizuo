import { Component, OnInit, Inject} from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  //httpservice 已经在根模块定义， 在这里可以依赖注入了，此时httpservice开始实例化
  constructor(@Inject('httpService') private http) { }

  looplist:Array<any> = [];
  datalist:Array<any> = [];
  config: SwiperOptions = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            loop:true,
            autoplay:2000
        };

  ngOnInit() {

  	this.http.get("/billboard/home?__t=1509691007750").then(result=>{
  		this.looplist = result.data.billboards;
  	})

    this.http.get("/film/now-playing?__t=1509691007757&page=1&count=5").then(result=>{
      console.log(result);
      this.datalist = result.data.films;
    })
  }

}
