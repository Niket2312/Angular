import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-blog-details',
  templateUrl: './blog-details.component.html',
  styleUrls: ['./blog-details.component.css']
})
export class BlogDetailsComponent implements OnInit {
  id!:number
  blog:any
  constructor(public router:Router,public route:ActivatedRoute,public blogservice:BlogService) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=params['id']
        this.blog=this.blogservice.getId(this.id)
        console.log(this.blog);
        
      }
    )
  }
  onBack(){
    if(this.id==0){
      alert("first blog")
      return
    }
    this.router.navigate(['../',this.blog.id-1],{relativeTo:this.route})
  }
  onForward(){
    if(this.id==this.blogservice.getLength()-1){
      alert("last blog")
      return
    }
    this.router.navigate(['../',this.blog.id+1],{relativeTo:this.route})
  }
}
