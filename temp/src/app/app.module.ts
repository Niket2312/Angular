import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JobsComponent } from './jobs/jobs.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { LoginService } from './login.service';
import { JObService } from './job.service';
import { JobListComponent } from './jobs/job-list/job-list.component';
import { PostJobComponent } from './jobs/post-job/post-job.component';
import { FormsModule } from '@angular/forms';
import { JobDetailsComponent } from './jobs/job-details/job-details.component';
import { EditJobComponent } from './jobs/edit-job/edit-job.component';
const appRoutes: Routes=[
  { path:'',component:LoginComponent},
  { path:'',component:HeaderComponent},
  { path:'jobs',component:JobsComponent,children:[
    {path:':id',component:JobDetailsComponent},
    {path:'',component:PostJobComponent},
    { path:':id/edit',component:EditJobComponent},
  ]},
];
@NgModule({
  declarations: [
    AppComponent,
    JobsComponent,
    LoginComponent,
    HeaderComponent,
    JobListComponent,
    PostJobComponent,
    JobDetailsComponent,
    EditJobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [LoginService,JObService],
  bootstrap: [AppComponent]
})
export class AppModule { }
