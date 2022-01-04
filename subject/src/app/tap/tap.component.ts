import { Component, OnInit } from '@angular/core';
import { interval, map } from 'rxjs';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.css']
})
export class TapComponent implements OnInit {
Data:any=[]
  constructor() { }

  ngOnInit(): void {
    const Arr=["Abc","Xyz","Pqr","Qwerty","Asd"]
    const source=interval(1500)
    source.pipe(map(res=>
      Arr[res]
    ))
    .subscribe(res=>{
      // console.log(res);
      this.Data=res
      
    })
  }

}
