import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {

  constructor(public router:Router,public route:ActivatedRoute, public blogservice:BlogService) { }

  ngOnInit(): void {
  }
  onClick(id:number){
    console.log("click");
    this.router.navigate([id],{relativeTo:this.route})
    console.log(id);
    
  }

}
