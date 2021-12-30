import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Posts } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedPosts = [];
  error = null;

  constructor(private http: HttpClient,public postservice:Posts) {}

  ngOnInit() {
    this.postservice.fetchPosts().subscribe(posts =>{
      this.loadedPosts=posts
      console.log(this.loadedPosts)
    },error =>{
      this.error=error.message;
    })
  }

  onCreatePost(postData) {
    // Send Http request
    this.postservice.onCreatePost(postData)
  }

  onFetchPosts() {
    this.postservice.fetchPosts().subscribe(posts =>{
      this.loadedPosts=posts
    },error =>{
      this.error=error.message
    })
    // Send Http request
  }

  onClearPosts() {
   this.postservice.deletePosts().subscribe(()=>{
     this.loadedPosts=[]
   })
    // Send Http request
  }
  onClick(){
    this.error=null
  }

  
}

