import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  onCreatePost(postForm) {
    this.http.post('https://practice-http-58491-default-rtdb.firebaseio.com/posts.json',postForm).subscribe(responseData => {
      console.log(responseData);
      
    })
    console.log(postForm);
  }

  onFetchPosts() {
    this.fetchPosts()
    // Send Http request
  }

  onClearPosts() {
    // Send Http request
  }
  fetchPosts(){
    this.http.get('https://practice-http-58491-default-rtdb.firebaseio.com/posts.json')
    .subscribe(postData=>{
      console.log(postData);
      
    })
  }
}
