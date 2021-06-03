import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.scss']
})
export class TemplateformComponent implements OnInit{
  loginForm:FormGroup;
  isSubmitted:boolean=false;
  firstPassword:any;
  confirmedPassword:any;
  validation:boolean=false;
  

  

  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',
              [Validators.required, Validators.pattern(/^([a-zA-Z0-9]+)([@]{1})([a-zA-Z0-9]+)([.]{1})([a-z]{2,8})(.[a-z]{2,8})?$/)]
            ],
      
      password:['',
                    [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#%&\$\^\*])(?=.{8,})/)]
                 ],
      confirmPassword:['', Validators.required],
      skills:this.fb.array([]) 
           
            

    });

    // this.loginForm.get('email').valueChanges.subscribe(data=>{
    // this.email = data;
    // });

    // this.loginForm.get('password').valueChanges.subscribe(data=>{
    //   this.password = data;
    // });
    

  }

  addSkills(){
    const add = this.loginForm.get('skills') as FormArray;
    add.push(
      this.fb.group({
skill:['', Validators.required]
      })
    )
  }



  receviedPassword(event){
    this.firstPassword = event.target.value;

  }

  receivedConfirmPassword(event){
    this.confirmedPassword = event.target.value;
    if(this.firstPassword === this.confirmedPassword){
      this.validation = false;
        
    }

    else{
      this.validation=true;
    }
    

  }

  get f(){
    return this.loginForm.controls;
  }

  onSubmit(){

  }

  // get f(){
  //   return this.loginForm.controls;
  // }

  // get email(){
  //   return this.loginForm.get('email').value;
  // }

  // get password(){
  //   return this.loginForm.get('password').value;
  // }

  // onSubmit(){
  //   if(!this.loginForm.valid){
  //     return;
  //   }
  //   this.isSubmitted = true;

  // }

  




















  // getData(event){
  //     console.log(event.target.value);
  // }

  // ngAfterViewInit(){
  // this.divRef.nativeElement.style.backgroundColor="blue";
  // this.divRef.nativeElement.innerHTML="Hi,Poonam";

    
  // }

  

  // fetchData(){
  //   this.datainfo=this.receivedData.nativeElement.value;
  //   console.log(this.receivedData.nativeElement.value);
  // }
  

}
