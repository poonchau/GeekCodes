import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employeeDetails:any[];
  constructor() { 
    this.employeeDetails = [
      {code:'emp100', name:'Poonam', gender:'female'},
      {code:'emp101', name:'Pooja', gender:'female'},
      {code:'emp102', name:'Dinesh', gender:'male'},
      {code:'emp103', name:'Shani', gender:'male'}


    ]
  }

  selectedOption:any = 'all';

  ngOnInit(): void {
  }

  getInput(selectedRadioButtonValue:string){
   //console.log(event.target.value) error;
   this.selectedOption = selectedRadioButtonValue;

   console.log(this.selectedOption);
   console.log(typeof(this.selectedOption));
  }

  getTotalEmp():number{
    return this.employeeDetails.length;
  }

  getTotalFemaleEmp():number{
    return this.employeeDetails.filter(e=> e.gender === 'female').length;
  }

  getTotalMaleEmp():number{
    return this.employeeDetails.filter(e=> e.gender === 'male').length;
  }



  


}
