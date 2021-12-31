import {HttpEventType, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import {Injectable} from '@angular/core'
import { tap } from 'rxjs/operators';
@Injectable({
    providedIn: 'root'
})

export class AuthInterceptorService implements HttpInterceptor{
    intercept(req:HttpRequest<any>,next:HttpHandler){
        console.log('Request is on its way');
        console.log(req.url);
        const modifiedReq=req.clone({
            headers: req.headers.append('Auth','xyz')
        });
        return next.handle(modifiedReq).pipe(tap(event=>{
        if(event.type === HttpEventType.Response){
            console.log('Response arrived');
            console.log(event.body );
            
        }
        }))
        
    }
}