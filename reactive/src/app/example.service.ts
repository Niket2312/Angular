import {Injectable} from '@angular/core'

@Injectable({
    providedIn:'root'
})
export class Example{
    data=[{
        username:'Niket',
        company:'abc',
        city:'rajkot',
        male:'male',
        answers:'yes',
        phone:'6356315902'
    }]
    getData(f:any){
        
        this.data.push(f)
        console.log(f);
        
    }
}