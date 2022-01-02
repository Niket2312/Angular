import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HttpComponent } from './http/http.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

const appRoute:Routes=[
  {path:'',component:LoginComponent},
  {path:'http',component:HttpComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HttpComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
