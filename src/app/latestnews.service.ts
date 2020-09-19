import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LatestnewsService {

  constructor(private http:HttpClient) { }

Visitor_details(data){
return this.http.post("http://localhost:3000/posts",data)
}
Visitor_Getdata(){
  return this.http.get("http://localhost:3000/posts")
  }

  getNews():Observable<any>{
   return this.http.get("https://newsapi.org/v2/everything?q=bitcoin&from=2020-09-03&sortBy=publishedAt&apiKey=1848b5465b1449d78d10c2991b1bea98")
  }
}
