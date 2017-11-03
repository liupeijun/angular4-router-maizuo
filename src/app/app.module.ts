import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { SwiperModule } from 'angular2-useful-swiper';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './card/card.component';
import { FilmComponent } from './film/film.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { SideBarComponent } from './common/sidebar/sidebar.component';
import { NavBarComponent } from './common/navbar/navbar.component';
import {HttpService} from "./service/http.service";
import { NowplayingComponent } from './film/nowplaying/nowplaying.component';
import { ComingsoonComponent } from './film/comingsoon/comingsoon.component';
import { DetailComponent } from './detail/detail.component';

import {Routing} from "./app.router";

@NgModule({ 
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    FilmComponent,
    PagenotfoundComponent,
    SideBarComponent,
    NavBarComponent,
    NowplayingComponent,
    ComingsoonComponent,
    DetailComponent
  ],       
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Routing,
    BrowserAnimationsModule, // 动画的模块引入  
    SwiperModule //轮播导入，这样才可以使用swiper组件
  ], 
  providers: [{provide: 'httpService',  useClass: HttpService}], 
  ////把提供商添加到根模块上，以便在任何地方都使用服务的同一个实例。
  bootstrap: [AppComponent]
})
export class AppModule { }
