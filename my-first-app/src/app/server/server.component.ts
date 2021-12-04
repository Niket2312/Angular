import { Component } from "@angular/core";

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html'
})
export class ServerComponent{
    userArray=''
    constructor(){
}
onUpdate(event:Event){
    this.userArray=(<HTMLInputElement>event?.target).value
}

}