import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { JObService } from 'src/app/job.service';
@Component({
  selector: 'app-post-job',
  templateUrl: './post-job.component.html',
  styleUrls: ['./post-job.component.css']
})
export class PostJobComponent implements OnInit {
jobs= {id:1,title:'dhru',company:'qwqw',place:'wq',time:'23/12/2-'}
  constructor(public jobservice:JObService) { }
  onDataAdd(title:string,company:string,place:string){
    let date=new Date().toString();
    let id=this.jobservice.getlength()+1;
    console.log(date)
    console.log(title);
    console.log(company);
    console.log(place);
this.jobservice.job1(id,title,company,place,date)
  }
  ngOnInit(): void {
  }

}
// function id(id: any, title: string, company: string, place: string, date: string) {
//   throw new Error('Function not implemented.');
// }

