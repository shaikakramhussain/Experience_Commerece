import { Component, OnInit } from '@angular/core';
import { LatestnewsService } from '../latestnews.service';
import { News } from '../news';

@Component({
  selector: 'app-newsdata',
  templateUrl: './newsdata.component.html',
  styleUrls: ['./newsdata.component.css']
})
export class NewsdataComponent implements OnInit {
  
constructor(private lnservice:LatestnewsService){}

news:News[]
 
 

  ngOnInit() {
    this.lnservice.getNews()
        .subscribe(
          data=>{
           
           this.news = data.articles;
            console.log("dd",this.news);
    
           }
         );
     }
   
  }
