import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription, take } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  
  constructor() { }
  subscription1!:Subscription 
  getData:any=[]
  ngOnInit(): void {
    const timer=interval(100)
    const Arr=["Niket","Abc","Xyz"]
    this.subscription1=timer
    .pipe(
      take(3),
      map(res=>Arr[res])
      )
    .subscribe(data=>{
      // console.log(data);
      this.getData.push(data)
      console.log(this.getData);
      
    })
    setTimeout(() => {
      this.subscription1.unsubscribe()

    },1000)
  }

}
