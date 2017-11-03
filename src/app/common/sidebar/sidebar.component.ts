import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import {sidebarAnimate} from "./sidebar.animate";
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
        sidebarAnimate
  ]

})
export class SideBarComponent implements OnInit {
  
  @Input("isShow") isShow:boolean; //获取父组件传来的属性
  @Output("event") event:EventEmitter<boolean> = new EventEmitter<boolean>();
  private state:string = "out";
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(){
    //每次父组件传入子组件的属性值变化时， 这个方法都会重新调用。
  	// console.log(this.isShow);
  	this.state = this.isShow?'in':'out';
  }


  handleClick(){
    //子传父
    this.event.emit(false); //
  }


}
