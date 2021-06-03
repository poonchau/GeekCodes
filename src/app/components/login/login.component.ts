import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  loginForm:FormGroup;
  isSubmitted:boolean=false;

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:[
              '',[Validators.required, Validators.pattern(/^([a-zA-Z0-9]+)([@]{1})([a-zA-Z0-9]+)([.]{1})([a-z]{2,8})$/)]
            ],
      
        password:[
                   '',[Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\_-])(?=.{8,25})/)]
         ]
      
     
           
        

        

      

    });
  }

  onSubmit(){
    if(this.loginForm.invalid){
      return;
    }
    this.isSubmitted= true;

    console.log(this.loginForm.value)

  }

  get f(){
    return this.loginForm.controls;
  }

  // resetData(){
  //   this.loginForm.reset();
  // }

  

}


// console.log(this.loginForm.value);
    // console.log(this.loginForm.valid);
    // console.log(this.loginForm.invalid);



  //   this.loginForm = this.fb.group({
  //     email:['',
  //               [Validators.required, Validators.pattern(/^([a-zA-Z0-9]+)([@]{1})([a-zA-Z0-9]+)([.]{1})([a-z]{2,5})(.[a-z]{2,5})?$/)]

  //     ],
  //     password:['',
  //                 [Validators.required,Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#&%\$\^\*])(?=.{8,25})/)]
  //     ],
  //     // username:['',[Validators.required,Validators.pattern(/^([a-zA-Z0-9\_-]{8,20})$/)]]

      
  //   });
    
  

  // get f(){
  //   return this.loginForm.controls;
  // }


  // onSubmit(){
    
  //   if(this.loginForm.invalid)
  //       return;
  //   this.isSubmitted = true;    

  // }

