import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { WriteBlogComponent } from './blog/write-blog/write-blog.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { BlogListComponent } from './blog/blog-list/blog-list.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog/blog-details/blog-details.component';
import { MyBlogComponent } from './my-blog/my-blog.component';
import { EditBlogComponent } from './blog/edit-blog/edit-blog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


const appRoutes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'myblog',component:MyBlogComponent},
  {path:'blog',component:BlogComponent,children:[
    {path:'',component:BlogListComponent},
    {path:'new',component:WriteBlogComponent},
    {path:':id',component:BlogDetailsComponent}
  ]}
]
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    HeaderComponent,
    LoginComponent,
    WriteBlogComponent,
    BlogListComponent,
    BlogComponent,
    BlogDetailsComponent,
    MyBlogComponent,
    EditBlogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    CKEditorModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
