import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchPosts()
  }

  onCreatePost(postData:{title:string;content:string}) {
    this.http.post('https://practice-http-58491-default-rtdb.firebaseio.com/posts.json',postData).subscribe(responseData => {
      console.log(responseData);
      
    })
    console.log(postData);
  }

  onFetchPosts() {
    this.fetchPosts()
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }
  private fetchPosts(){
    this.http.get('https://practice-http-58491-default-rtdb.firebaseio.com/posts.json')
    .pipe(map(responseData=>{
      const postsArray: any[]=[];
      for(let key in responseData){
        postsArray.push({...responseData[key]})
      }
    }))
    .subscribe(posts=>{
      console.log(posts);
      
    })
  }
  }

