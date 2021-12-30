import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import {Injectable} from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class Posts{
    constructor(private http:HttpClient){}
    onCreatePost(postData) {
        // Send Http request
        this.http
          .post(
            'https://practice-http-58491-default-rtdb.firebaseio.com/posts.json',
            postData,{
                observe:'response'
            }
          )
          .subscribe(responseData => {
            console.log(responseData.body);
          });
      }
      fetchPosts(){
        return this.http
        .get('https://practice-http-58491-default-rtdb.firebaseio.com/posts.json',
        {
            headers:new HttpHeaders({'Name':'Niket'}),
            params:new HttpParams().set('print','preety'),
        })
        .pipe(
          map(responseData => {
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
    deletePosts(){
       return this.http.delete('https://practice-http-58491-default-rtdb.firebaseio.com/posts.json')
    }
      }
    
