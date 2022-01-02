import { Component, OnInit } from '@angular/core';
import { interval, map, Subscription } from 'rxjs';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
subscribe2!:Subscription
subscribe3!:Subscription
msg1:any
msg2:any

  constructor() { }

  ngOnInit(): void {
   const timer=interval(1000)
  //  this.subscribe2= timer.pipe(map((data2: any)=>
  //    'video'+data2
  //  ))
  //  .subscribe(data=>{
  //    this.msg1=data
  //  })
  //  setTimeout(()=>{
  //    this.subscribe2.unsubscribe()
  //  },10000)
     //  exercise2
     this.subscribe3=timer.pipe(map(data3=>data3+10))
     .subscribe(data4=>{
       console.log(data4);
       this.msg2=data4
     })
     setTimeout(()=>{
      this.subscribe3.unsubscribe()
    },10000)
  }
  

}
