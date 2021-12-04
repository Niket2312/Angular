import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { JobsComponent } from './jobs/jobs.component';
import { PostJobComponent } from './jobs/post-job/post-job.component';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';
import { EditJobComponent } from './jobs/edit-job/edit-job.component';
import { Route } from '@angular/compiler/src/core';
import { LoginService } from './login/login.service';
import { RouterModule } from '@angular/router';
const appRoute:Route =[
  {path:"jobs",component:JobsComponent},
  {path:"login",component:LoginComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    JobsComponent,
    PostJobComponent,
    JobListComponent,
    JobDetailsComponent,
    EditJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
