import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-employee-count',
  templateUrl: './employee-count.component.html',
  styleUrls: ['./employee-count.component.scss']
})
export class EmployeeCountComponent implements OnInit {
  selectedRadioButtonValue:any='';

  constructor() { }

  ngOnInit(): void {
    // console.log(this.all);
    // console.log(this.female);
    // console.log(this.male);

  }

  @Input() all:number;
  @Input() female:number;
  @Input() male:number;

  @Output() result = new EventEmitter<any>();


  getSelectedOption(){
    // console.log(event.target.value);
    //this.selectedRadioButtonValue = event.target.value;
    this.result.emit(this.selectedRadioButtonValue);
   
  }


}
