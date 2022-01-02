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

  

  onClearPosts() {
   this.postservice.deletePosts()
  }

    // Send Http request
  
  onClick(){
    this.error=null
  }
  onClick2(){
    {
       this.http
      .get('https://practice-http-58491-default-rtdb.firebaseio.com/posts.json',
      {
      })
      .pipe(
        map(responseData => {
          const postsArray = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({...responseData[key],id:key});
            }
          }
          return postsArray;
        })
        
      ).subscribe(posts=>{
        this.postservice.loadedPosts=posts
        console.log(this.postservice.loadedPosts);
        
      })
  
  }
    console.log("click");
    
  }
}

