import { Injectable } from "@angular/core";
import { HeaderComponent } from '../header/header.component';
import { HeaderService } from '../header/header.service';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './user.service';
import { NewUser } from '../models/NewUser';
import { Router } from '@angular/router';

@Injectable({
  providedIn: "root",
})
export class LoginService {
  userLoggedIn: boolean = false;
  username = new BehaviorSubject<string>('Sign In'); //change this
  uxName = this.username.asObservable();//take value from this. 


  uname: string = null;


  usersList: NewUser[] = null;
  loggedInUser: NewUser = null;

  constructor(private head:HeaderService,private userService:UserService,private router:Router) {}

  checkUserNameAndPassword(email: string, password: string) {

    this.userService.getUsers().subscribe(
      resp => {
        this.usersList = resp;
        this.loggedInUser = this.usersList.find(resp => resp.email === email);
        
        if (this.loggedInUser) { 
          if (this.loggedInUser.email === email && this.loggedInUser.password === password) {
            this.userLoggedIn = true;
            let pos = email.indexOf('@');
            this.uname = email.substr(0, pos);
            console.log(this.username);
            this.changeUserName(this.uname);


            localStorage.setItem('curUser', JSON.stringify(this.loggedInUser));


            
            this.router.navigate(['/prods/test']);
          } else {
            alert("invalid credentials");
          }
        }
        else {
          alert("user not find. please register");
        }
      });
  }

  changeUserName(name: string) {
    this.username.next(name);
  }

}
