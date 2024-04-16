import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public signupForm !: FormGroup
  constructor( private forms: FormBuilder, private http: HttpClient){
    
  }


  ngOnInit(): void {
    this.signupForm = this.forms.group({
      fullName : [''],
      email: [''],
      password: [''],
      date: null,
      type: [''],
      
    })
      
  }

  signup(){
    console.log(this.signupForm.value)
  }

}
