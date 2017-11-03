import { Injectable } from '@angular/core';
import { Http } from '@angular/http'; //引入http模块
import 'rxjs/add/operator/toPromise'; //利用toPromise操作符把Observable直接转换成Promise对象
  

@Injectable()
export class HttpService {

  constructor(private http:Http) { 
 	//依赖注入 angular 提供的http服务，这个服务所在的模块http，
 	//在根模块已经imports，所以才有此provide,
  }

  get(path:string):Promise<any>{
  	return this.http.get(`/v4/api${path}`)
               .toPromise()
               .then(response => response.json()) 
               .catch(this.handleError);
  }


  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
