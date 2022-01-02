import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
@Injectable({
    providedIn:'root'
})

export class Subject12{
    name=new Subject<any>()
    name2=new BehaviorSubject('Niket')
}