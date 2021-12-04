import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'example'
})
export class Example implements PipeTransform {
    transform(value:any){
        return (value.split(' ')+" ")
    }
}