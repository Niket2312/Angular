import { Directive, ElementRef, Input,HostBinding } from '@angular/core';

@Directive({
  selector: '[appDynamicColor]'
})
export class DynamicColorDirective {
  @Input() myObject1:any;

  @HostBinding('style.backgroundColor') backgroundColor!: string;
  @HostBinding('textContent') text!: string;
  constructor(el: ElementRef) {    
   }
   ngOnInit(){    
    this.backgroundColor=this.myObject1.colour;
    this.text=this.myObject1.text;
  }

  }
  
