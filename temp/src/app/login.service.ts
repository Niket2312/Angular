import { Injectable, OnInit } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class LoginService implements OnInit{
     uname:string = '';

    getname(uname:string) {
        console.log(uname);
        // return uname
    }
 
    ngOnInit() {        
        console.log(this.uname);
        
    }
   
}