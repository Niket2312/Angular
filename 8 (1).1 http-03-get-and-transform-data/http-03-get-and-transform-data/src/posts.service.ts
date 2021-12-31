import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PostService{
    loadedService:any=[]
    constructor(private http: HttpClient) {}

    onFetchPosts(){
    return this.http.get('https://practice-http-58491-default-rtdb.firebaseio.com/posts.json')
    .pipe(map(responseData=>{
      const postsArray=[];
      for(let key in responseData){
        postsArray.push({...responseData[key],id:key})
      }
      return postsArray
    }))
    
}
    getData(data){
        this.loadedService.push(data);
        console.log(this.loadedService);
        
    }
    getId(id){
        console.log(id);
        
        return this.loadedService.find(x=>x.id==id)
    }
    editId(id){
        console.log(id);
     
       return this.loadedService.find(x=>x.id==id)

        
    }


}