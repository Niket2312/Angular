import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})

export class LoginService{
     public username:string='niket'
    getName(username:any){
        this.username=username
        console.log(this.username);
        
    }
}