import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import { LoginService } from 'src/app/login.service';
import { LoginComponent } from 'src/app/login/login.component';
import { BlogService } from '../blog.service';


@Component({
  selector: 'app-write-blog',
  templateUrl: './write-blog.component.html',
  styleUrls: ['./write-blog.component.css']
})
export class WriteBlogComponent implements OnInit {
  id!:number
  public Editor:any = ClassicEditor;
  languageList:any = [];
  selectedItems:any = [];
  languageSettings = {};
  constructor(public loginservice:LoginService, public blogservice:BlogService,public router:Router) { }

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
  }
  onSubmit(form:any){
    console.log(form);
    this.id=Math.floor(Math.random()*100000)
    form.id=this.id
    form.date=new Date().toString()
    this.blogservice.getData(form)
    this.router.navigate(['blog'])
  }
  }
  
  
  



