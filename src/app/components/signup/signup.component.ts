import { Component, OnInit } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormBuilder,FormGroup,FormControl, Validators } from '@angular/forms';
import { validateBasis } from '@angular/flex-layout';
import { ReturnStatement } from '@angular/compiler';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  boolstatus:boolean=false;
  signupForm:FormGroup;
  constructor(private fb: FormBuilder, private toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
   this.signupForm= this.fb.group({
    fname:['', Validators.required],
    lname:['', Validators.required],
    email:['',[Validators.required, Validators.pattern(/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+).([a-z]{2,10})$/)]],
    phonenumber:['',Validators.required],
    companyname:['',Validators.required],
    jobtitle:['', Validators.required],
    companysize:['',Validators.required],
    countpeople:['',Validators.required],
    trainingNeeds:['',Validators.required]


   })
  }

  // convenience getter for easy access to form fields
  get f(){
    return this.signupForm.controls;
  }

  OnSubmit(){
    console.log("Submit Clicked!!");
    this.toastr.success("Form Submitted Successfully!");
    this.router.navigateByUrl('/header');

  }

  closeSignupPage(){
    this.router.navigateByUrl('/searchBox');
  }

}
