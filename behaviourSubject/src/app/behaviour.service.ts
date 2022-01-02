import { Injectable } from "@angular/core";
import { Subject,BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class BehaviourService{
    name=new BehaviorSubject('Niet')
}