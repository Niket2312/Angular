import {  Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BlogService } from '../blog/blog.service';
import { LoginService } from '../login.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditBlogComponent } from '../blog/edit-blog/edit-blog.component';
@Component({
  selector: 'app-my-blog',
  templateUrl: './my-blog.component.html',
  styleUrls: ['./my-blog.component.css']
})
export class MyBlogComponent implements OnInit {
username:any
blog:any=[]
blogEdit:any
id!:number
  constructor(public loginservice:LoginService,
    public blogservice:BlogService,public router:Router,
    public route:ActivatedRoute,public modalservice:NgbModal) {

    this.username=this.loginservice.username
    console.log(this.username);
    for(let elements of this.blogservice.blog){
      if(elements.author==this.username){
        this.blog.push(elements)
        console.log(this.blog);
        
      }
    }
   }
  
  
  ngOnInit(): void {
  }
  onDelete(id:number){
    let i:any=this.blog.find((x: { id: number; })=>x.id==id)
    this.blogservice.onDelete2(id)
    this.blog=this.blog.filter((e: any)=>{
     return e!=i
    })
  }
  onClick(id:number){
    this.router.navigate(['./blog',id])
    console.log(id);
    console.log("click");
    // this.modalservice.open(EditBlogComponent);

  }
  onEdit(id:number){
    this.blogEdit=this.blogservice.getId(id)
    console.log(this.blogEdit);
    
  let modalRef=this.modalservice.open(EditBlogComponent);
  modalRef.componentInstance.blogEdit=this.blogEdit
  }
  

}
