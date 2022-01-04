import { Component, OnInit } from '@angular/core';
import { from, interval, take } from 'rxjs';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.css']
})
export class TakeComponent implements OnInit {
randomNames=["niket","abc","xyz"]
getNames:any=[]
  constructor() { }

  ngOnInit(): void {
    let nameSource=from(this.randomNames)
    nameSource.pipe(take(2))
    .subscribe(res=>{
      // console.log(res);
      this.getNames.push(res)
      console.log(this.getNames);
      
    })
  }
}
