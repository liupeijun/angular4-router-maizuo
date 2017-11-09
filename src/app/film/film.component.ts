import { Component, OnInit,Inject } from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html',
  styleUrls: ['./film.component.scss']
})
export class FilmComponent implements OnInit {

  constructor(@Inject("messageService") private message) { 
      
  }

  ngOnInit() {
      this.message.sendMessage("卖座电影");
  }

}
