import { Component, OnInit } from '@angular/core';
import { JObService } from 'src/app/job.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-job-list',
  templateUrl: './job-list.component.html',
  styleUrls: ['./job-list.component.css']
})
export class JobListComponent implements OnInit {
  job!:{id:number,title:string,company:string,place:string,time:string};
  paramsSubscription!: Subscription;
  constructor(public jobservice:JObService,private route:ActivatedRoute,
    private router:Router) {}
   
  ngOnInit() {
   
   
  }
  
  onEdit(id:any){
    this.router.navigate([id,'edit'],{relativeTo:this.route})
  }
  onclick(id:number){
    this.router.navigate([id],{relativeTo:this.route})   
  }
}

