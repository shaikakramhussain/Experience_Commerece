import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { LatestnewsService } from '../latestnews.service';
import { News } from '../News';
@Component({
  selector: 'app-next',
  templateUrl: './next.component.html',
  styleUrls: ['./next.component.css']
})
export class NextComponent implements OnInit {

  name: any;
  selfie_of_the_person: any;
  email: any;
  type_of_visit: any;
  person_to_visit: any;
  date_of_entry: any;
  time_of_entry: any;
  time_of_exit: any;
  ResultData:string;
  msg: any;
  status: boolean = false;
  news:News[]
  Respose:any;

  public userData: any;
  constructor(private route: ActivatedRoute,private  lnservice:LatestnewsService) { }

  ngOnInit() {
    this.userData = JSON.parse(localStorage.getItem('userData'))
    this.route.queryParams.subscribe(params => {
      this.name = params['name'];
      this.selfie_of_the_person = params['selfie_of_the_person'];
      this.email = params['email'];
      this.type_of_visit = params['type_of_visit'];
      this.person_to_visit = params['person_to_visit'];
      this.date_of_entry = params['date_of_entry'];
      this.time_of_entry = params['time_of_entry'];
      this.time_of_exit = params['time_of_exit'];
    });
    this.lnservice.getNews()
    .subscribe(
      data=>{
       
       this.news = data.articles;
       console.log("dttt",this.news);

      }
    );
    this.lnservice.Visitor_Getdata().subscribe(res=>{
      this.Respose = res;
      console.log(res);
    })
  }
  Send(){
    this.msg = "You have been sent details successfully";
    this.status = true;
  }
  ShowData(com){
this.ResultData = com
console.log(JSON.stringify(this.ResultData));
  }

}


