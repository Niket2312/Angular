import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { PostService } from 'src/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  constructor(private http: HttpClient,public postservice:PostService) {}
  postData
  toggleButton=false
  ngOnInit() {
    console.log(this.postData);
    
  }

  onCreatePost(postForm){
    this.http.post('https://practice-http-58491-default-rtdb.firebaseio.com/posts.json',postForm)
    .subscribe(posts=>{
      console.log(posts);
      console.log(postForm);
      
    })
  }
  onFetchPosts(){
  this.postservice.onFetchPosts().subscribe(posts=>{
    // console.log(posts);
    this.postservice.loadedService=posts
    console.log(this.postservice.loadedService);
          
  })  
  }
  onClearPosts(){
    this.http.delete('https://practice-http-58491-default-rtdb.firebaseio.com/posts.json')
    .subscribe(posts=>{
      console.log(posts);
      
    })
  }
  onClick(id){
    this.postData=this.postservice.getId(id)
    console.log(id);
    console.log(this.postData);
    
  }
  onDelete(id){
    console.log(id);

    this.http.delete(`https://practice-http-58491-default-rtdb.firebaseio.com/posts/${id}.json`)
    .subscribe(posts=>{
      console.log(posts);
      
    })
  }
  onEdit(id){  
    console.log(id);
    this.toggleButton=true
     this.postData=this.postservice.editId(id)
  }
  onClick2(postForm,id){
    console.log(id);
    console.log(postForm);
    
    this.http.put(`https://practice-http-58491-default-rtdb.firebaseio.com/posts/${id}.json`,postForm)
    .subscribe(posts=>{
      console.log(posts);
      
    })
    
    this.toggleButton=false
  }

  }
