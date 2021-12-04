export class StudentService {
  students = [
    {name:"Parth",school: "SNK",date:"	Thu Nov 25 2021 10:34:28 GMT+0530 (India Standard Time)"} ,
    {name:"Niket",school: "Marwadi",date:"Thu Nov 25 2021 10:34:36 GMT+0530 (India Standard Time)"}
  ]
  constructor() { }

  addStudentData(studentname:any,schoolname:any,logintime:any) {
    this.students.push({name:studentname,school:schoolname,date:logintime});
    console.log(studentname,schoolname,logintime);
  }
}