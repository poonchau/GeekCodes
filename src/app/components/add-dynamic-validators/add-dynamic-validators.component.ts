import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-dynamic-validators',
  templateUrl: './add-dynamic-validators.component.html',
  styleUrls: ['./add-dynamic-validators.component.scss']
})
export class AddDynamicValidatorsComponent implements OnInit {
  empForm:FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.empForm = this.fb.group({
      fname:['',Validators.required],
      lname:['',Validators.required],
      Address: this.fb.array([]),
    });
  }


  get f(){
    return this.empForm.controls;
  }


  addSkills(){
    console.log("Add Hello");
    const add = this.empForm.get('Address') as FormArray;

    add.push(
      this.fb.group({
        City: ['', Validators.required]
        
        
      })

    );
  }

  removeField(key:any){
    console.log("Remove function called")
   let getIndex = this.empForm.get('Address') as FormArray;
   getIndex.removeAt(key);
  }

  onSubmit(){
    console.log(this.empForm);
    
  }

}
