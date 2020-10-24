import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { NewUser } from '../models/NewUser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  
  userName: string = localStorage.getItem('username');
  password: string;

  curUser: NewUser = null;

  ngOnInit() {
    
    this.curUser=JSON.parse(localStorage.getItem('curUser'));
    
 }

  constructor(public loginService:LoginService,private router:Router) { }
  onSubmit(loginForm:NgForm) {
    console.log(loginForm);
    // if (this.loginService.checkUserNameAndPassword(loginForm.value.email, loginForm.value.password)) {
    //   localStorage.setItem('username', loginForm.value.email);
    //   this.router.navigate(['/prods/test']);   
    // }
    // else {
    //   alert("Invalid User");
    // }

    this.loginService.checkUserNameAndPassword(loginForm.value.email, loginForm.value.password)
      localStorage.setItem('username', loginForm.value.email);
         
    
  }

}
