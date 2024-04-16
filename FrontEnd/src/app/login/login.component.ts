import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AppModule } from '../app.module';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit  {
  loginForm!:  FormGroup;


  userdata: any =[];
  user:any
  constructor(private forms: FormBuilder, private route : Router, private http: HttpClient, private userSer : UserService){}


  ngOnInit(): void {
    this.loginForm = this.forms.group({
      username : [''],
      password : [''],
    })
      
  }
  datafill(){
    this.userSer.getAllUser().subscribe({
      next: (data) => {this.userdata=data, console.log(this.userdata)
      
      },     
      error: (err) => console.log(err),
      complete: () =>  this.login(),
    
     } );

  }





  login(){
    
    

}

 

}
