import { Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {
  @ViewChild('myname', {static: true}) header!: ElementRef;
  @ContentChild('paragraph1') paragraph!: ElementRef;
  constructor() { }
  name='Niket';

  button1Click()
  {
    this.name='Doshi'
  }

  ngOnInit() {
    console.log('ngOnInit running....');
    console.log('Heading Conetent: ' +this.header.nativeElement.textContent);
        
  }

  ngDoCheck() {
    console.log('ngDoCheck running....');

    console.log('Heading Conetent: ' +this.header.nativeElement.textContent);     
 
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit running....');    
    
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked running....');
    console.log('Heading Conetent: ' +this.header.nativeElement.textContent);
     
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit running....');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked running....');
    console.log('Heading Conetent: ' +this.header.nativeElement.textContent); 
  }

  ngOnDestroy() {
    console.log('ngOnDestroy running....');
    console.log('paragraph : '+this.paragraph.nativeElement.textContent);
 
  }
  

}