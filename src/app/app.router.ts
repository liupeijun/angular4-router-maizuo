import { RouterModule }   from '@angular/router'; //路由模块
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { FilmComponent } from './film/film.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { NowplayingComponent } from './film/nowplaying/nowplaying.component';
import { ComingsoonComponent } from './film/comingsoon/comingsoon.component';
import { DetailComponent } from './detail/detail.component';

const routes = [
      {
        path: 'home',
        component:HomeComponent
      }, 
      {
        path: 'film',
        component:FilmComponent,
        children:[
          {
            path: 'nowplaying',
            component: NowplayingComponent
          },
          {
            path: 'comingsoon',
            component: ComingsoonComponent
          },

          { //重定向
            path: '',
            redirectTo: '/film/nowplaying',
            pathMatch: 'full'
          },
        ],

      },
      //  {
      //   path: 'detail/:id',
      //   component:CardComponent
      // },
      {
      	path: 'card',
      	component: CardComponent
      },
     
      {
        path: 'detail/:id',
        component: DetailComponent
      },

      { //重定向
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },

      /*
        (1)如果pathmatch 是 "prefix" 默认值 ，此时path 设置的是/kerwin,
        那么 /kerwin /kerwin/a /kerwin/a/b 都会重定向的home
        (2)如果pathmatch 是 "full" ,此时必须与path设置值完全一样， 才能正确重定向

      */

      { 
        path: '**', 
        component: PagenotfoundComponent 
      }

      /*
      **路径是一个通配符。当所请求的URL不匹配前面定义的路由表中的任何路径时，路由器就会选择此路由。 
      这个特性可用于显示“404 - Not Found”页，或自动重定向到其它路由。
      */
    ];

export const Routing = RouterModule.forRoot(routes);

