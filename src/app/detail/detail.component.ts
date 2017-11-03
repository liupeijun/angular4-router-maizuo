import { Component, OnInit ,Inject} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor(@Inject("httpService") private http,private route:ActivatedRoute ) { }
 // 依赖注入ActivatedRoute 服务
  filmInfo:object = null;
  ngOnInit() {
      //上个页面出来的参数 在 this.route.params["value"].id
      console.log(this.route.params["value"])
  		this.http.get(`/film/${this.route.params["value"].id}?__t=1509700125845`).then(result=>{
  			// console.log(result)
  			this.filmInfo = result.data.film;
  		})
  }

}
