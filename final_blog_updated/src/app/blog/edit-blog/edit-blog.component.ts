import { Component, Input, OnInit } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { LoginService } from 'src/app/login.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgForm } from '@angular/forms';
import { BlogService } from '../blog.service';
@Component({
  selector: 'app-edit-blog',
  templateUrl: './edit-blog.component.html',
  styleUrls: ['./edit-blog.component.css']
})
export class EditBlogComponent implements OnInit {
  constructor(public loginservice:LoginService,public modalService:NgbModal,public blogservice:BlogService) { }
  public Editor:any = ClassicEditor;
  languageList:any = [];
  selectedItems:any = [];
  form = NgForm
  languageSettings = {};
  blog:any
  @Input() blogEdit:any
 
  ngOnInit(): void {


    this.languageList = [
      { language_id: 1, language_text: 'Angular' },
      { language_id: 2, language_text: 'Java' },
      { language_id: 3, language_text: 'Python' },
    ];
    this.languageSettings = {
      singleSelection: false,
      idField: 'language_id',
      textField: 'language_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    console.log(this.blogEdit);
    
  }
  onSubmit(form:any){
    console.log(form);
     this.modalService.dismissAll();
     form.id = this.blogEdit.id;
     form.date = new Date().toString();
     this.blogservice.onEdit(form)

    //  const index = this.blog.findIndex((el: { id: any; }) => el.id === this.blogEdit.id)
    //  console.log(index);
    //  this.blogservice.blog
    //  this.blogservice.blog[index].id =this.blogEdit.id
    //  this.blogservice.blog[index].title = this.blogEdit.title
    //  this.blogservice.blog[index].description =this.blogEdit.description
    //  this.blogservice.blog[index].imageurl = this.blogEdit.imageurl
    //  this.blogservice.blog[index].languages = this.blogEdit.languages
    //  this.blogservice.blog[index].author = this.blogEdit.author
    //  this.blogservice.blog[index].date = this.blogEdit.date

  }
  
}
