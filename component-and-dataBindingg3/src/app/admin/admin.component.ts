import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  gen=''
  Element=[{firstName:'Niket',familyName:'Doshi',countryName:'India'}]
  onDataAdded(parentData:{firstName:string,familyName:string,countryName:string}){
    this.Element.push({
      firstName:parentData.firstName,
      familyName:parentData.familyName,
      countryName:parentData.countryName
    })
  }
  // onDataaAdded(event:any){
  //   console.log(event)
  // }
  constructor() { }

  ngOnInit(): void {
  }

}
