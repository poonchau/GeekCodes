import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.scss']
})
export class SearchBoxComponent implements OnInit {
  signUpForm:FormGroup;
  isSubmitted=false;
 

  // details = 
  //            { fname:'',
  //              phoneNumber:''};

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      fname:['',Validators.required],
      email:['',[Validators.required, Validators.pattern(/^([a-zA-Z0-9]+)([@]{1})([a-zA-Z0-9]+)([.]{1})([a-z]{2,8})(.[a-z]{2,8})?$/)]],
      phoneNumber:['',[Validators.required,Validators.pattern(/^([7-9]\d{9})$/)]],
      gender:['',Validators.required],
      selectData:['',Validators.required],
      termField:['', Validators.required],
      viewMessage:[''],
      skills:this.fb.array([{
        skill:['']
      }
       
      ])

    });
  }

  get f(){
    return this.signUpForm.controls;
  }

  get fname(){
    return this.signUpForm.get('fname');
  }
  get email(){
    return this.signUpForm.get('email');
  }

  get phoneNumber(){
    return this.signUpForm.get('phoneNumber');
  }

  onSubmit(){
    
    console.log(this.signUpForm.valid)
    if(this.signUpForm.valid){
      this.isSubmitted = true;
    }
  }

  resetData(){
    this.signUpForm.reset();
  }

  addData(){
    const add = this.signUpForm.get('skills') as FormArray;
    add.push(
      this.fb.group({
        skill:['']
      })
    )
  }

 
  //   this.loginForm = new FormGroup({
  //     email: new FormControl('',[Validators.required, Validators.pattern(/^([a-zA-Z0-9]+)([@]{1})([a-zA-Z0-9]+)([.]{1})([a-z]{2,8})$/)]),
  //     password: new FormControl('',[Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#%\$\^\*])(?=.{8,25})/)])
  // });

  // this.loginForm = this.fb.group({
  //   email:[
  //           '',[Validators.required, Validators.pattern(/^([a-zA-Z0-9]+)([@]{1})([a-zA-Z0-9]+)([.]{1})([a-z]{2,8})(.[a-z]{2,8})?$/)]
  //         ],
  //   password:[
  //     '',[Validators.required, Validators.pattern(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#%\$\^\*])(?=.{8,25})/)]
  //   ]
  // });


  

}
