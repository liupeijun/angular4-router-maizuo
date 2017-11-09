import { Component, OnInit, Inject } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
}) 
export class NavBarComponent implements OnInit {
  subscription : Subscription;
  title : String =  "卖座电影";
  constructor( @Inject("messageService") private message ) { 
    //注册
    this.subscription = this.message.getObserver()
    .subscribe(message => { this.title = message.text });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    //取消注册
    this.subscription.unsubscribe();
  }

}
