import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobComponent } from './job/job.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { PostJobComponent } from './job/post-job/post-job.component';
import { JobListComponent } from './job/job-list/job-list.component';
import { JobDetailsComponent } from './job/job-details/job-details.component';
import { EditJobComponent } from './job/edit-job/edit-job.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Login } from './login/login.services';
const appRoutes: Routes = [
{path:'job',component: JobComponent,children: [{path:'',component: JobListComponent}]},
{path:'login',component:LoginComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    JobComponent,
    LoginComponent,
    HeaderComponent,
    PostJobComponent,
    JobListComponent,
    JobDetailsComponent,
    EditJobComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
  ],
  providers: [Login],
  bootstrap: [AppComponent]
})
export class AppModule { }
