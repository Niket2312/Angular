import {  Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn:'root'
})
export class PostService{
    constructor(public http:HttpClient){}
    oncreatePost(postData:any){

    }
    fetchPosts(){
        return this.http
        .get('https://practice-http-58491-default-rtdb.firebaseio.com/posts.json',
        {
        })
        .pipe(
          map(responseData:any => {
            const postsArray = [];
            for (const key in responseData) {
              if (responseData.hasOwnProperty(key)) {
                postsArray.push({...responseData[key],id:key});
              }
            }
            return postsArray;
          })
        )
      
    }
}