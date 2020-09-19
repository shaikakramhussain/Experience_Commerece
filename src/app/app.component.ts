import { Component, OnInit} from '@angular/core';
 import { LatestnewsService } from './latestnews.service';
 import {News} from './News';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  constructor(private  lnservice:LatestnewsService){}

  news:News[]

  ngOnInit(){
    this.lnservice.getNews()
    .subscribe(
      data=>{
       
       this.news = data.articles;
       console.log("dttt",this.news);

      }
    );
 }
}