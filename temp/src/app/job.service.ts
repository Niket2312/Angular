import { Injectable } from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class JObService{
    
    job=[{
        id:1,
        Title:'CEO',
        company:'infosys',
        place:'Rajkot',
        time:'11:40'
    },{
        id:2,
        Title:'CEO',
        company:'Google',
        place:'Gandhinagar',
        time:'11:45'
    }]
    job1(id:number,title:any,company:any,place:any,time:any){
        this.job.push(
            {id:id,Title:title,company:company,place:place,time:time}
        );
    }
    getlength(){
        return this.job.length;
    }

    getJobLength() {
        this.job.length;
        console.log(this.job.length);
    }
    getid(id:number){
        
        return this.job[id-1];
        // console.log(this.job[id-1]);
        // console.log(this.job);

        
    }
    // getjob(id:number){
    //     this.title=this.jobservice.title;
    //     this.company=this.jobservice.company;
    //     this.place=this.jobservice.place;
    // }
}
