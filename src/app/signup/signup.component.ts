import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NewUser } from '../models/NewUser';
import { UserService } from '../services/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('newUserForm', {static: false}) addUserForm:NgForm;
  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
  }

  onSubmit(userForm:NgForm) {
    
    let obj: NewUser = userForm.value;
    console.log(obj);
    this.userService.addnNewUser(obj).subscribe(resp => {
      if (resp) {
        alert("Registration Successful.");
        this.router.navigate(['/login'])
      }
    });
  }

}
