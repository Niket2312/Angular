import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { concatMap, exhaustMap, fromEvent } from 'rxjs';
@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.css']
})
export class ExhaustMapComponent implements OnInit,AfterViewInit {
num=0
savedData:any
@ViewChild('btn') btn!:ElementRef;
  constructor(public http: HttpClient) { }
 
  url='https://practice-http-58491-default-rtdb.firebaseio.com/posts.json'
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    fromEvent(this.btn.nativeElement,'click').pipe(exhaustMap(()=>this.onSave(this.num++)))
    .subscribe(res=>{
      this.savedData=res
      console.log(this.savedData);
      
    })
  }
  onSave(changes:any){
    return this.http.put(this.url,{data:changes})
  }
 
}
