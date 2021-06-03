import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent implements OnInit {
  loginForm:NgForm;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(data:NgForm){
    console.log(data);
  }

}
