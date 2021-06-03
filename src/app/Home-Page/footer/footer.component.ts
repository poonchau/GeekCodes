import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  loginForm : FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email:['',[Validators.required, Validators.pattern(/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+).([a-z]{2,10})$/)]],
      password:['',[Validators.required]]
    })
  }

  onSubmit(){

  }

}
