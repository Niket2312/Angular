import { Component, OnInit } from '@angular/core';
import { JObService } from 'src/app/job.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { JobsComponent } from '../jobs.component';


@Component({
  selector: 'app-edit-job',
  templateUrl: './edit-job.component.html',
  styleUrls: ['./edit-job.component.css']
})
export class EditJobComponent implements OnInit {
  id!:number

  constructor(public jobService:JObService,private route:ActivatedRoute,private router:Router) { }
job={id:1,Title:'hello',company:'sdhjfgh',place:'Rajkot',time:'12321'}
  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.job=this.jobService.getid(this.id)
        console.log(params)
        console.log(this.job);
      }
    )
    
    // this.title=this.jobservice.title
    }
    onSubmit(){

    }
  
  
  
  }

