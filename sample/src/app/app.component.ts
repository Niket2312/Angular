import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sample';
  constructor(public http:HttpClient){}
  onSubmit(f:any){
    console.log(f);
    let formData=new FormData();
   formData.append('email','niketcdoshi@gmail.com')
   formData.append('password','xxbv1760XH@2312')
   this.http.post('http://103.86.16.120:8086/api/user/2/custom-login',formData)
  .subscribe(data =>{
    console.log(data);  
  })
  }
}
