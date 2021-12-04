import { Component, OnInit } from '@angular/core';
import { Observable,Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'observables';
  private firstObservable!:Subscription
  arr:string[] = ["arr1","arrr2","arr3","arr4","arr5","arr6","arr7","arr8","arr9"];
  ngOnInit() {
    const customObs=Observable.create((observer:any)=>{
      let randomnumber = this.arr[Math.floor(Math.random()*9)];
      setInterval(()=>{
        observer.next(randomnumber);
        
        if(randomnumber ==this.arr[7]){
          observer.complete();
        }
        if(randomnumber==this.arr[3]){
          observer.error(new Error('do not use this.'));
        }
        randomnumber = this.arr[Math.floor(Math.random()*9)];
      },100);
    })

    this.firstObservable=customObs.subscribe((data:any) => {
      console.log(data);
    });
  }

  ngOnDestroy(){
    this.firstObservable.unsubscribe();
  }

    }
