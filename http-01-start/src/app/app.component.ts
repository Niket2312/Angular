import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Map}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {this.fetchPost()}

  onCreatePost(postData: { title: string; content: string }) {
    // Send Http request
    console.log(postData);
    this.http.post(
      'https://practice-http-58491-default-rtdb.firebaseio.com/posts.json',postData).
      subscribe(responseData=>{
        console.log(responseData);
        
    })
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPost()
  }

  onClearPosts() {
    // Send Http request
  }
  private fetchPost(){
    this.http.get('https://practice-http-58491-default-rtdb.firebaseio.com/posts.json').
    subscribe(post=>{
      console.log(post);
      
    })
  }
}
