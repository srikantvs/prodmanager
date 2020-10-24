import { Injectable, OnInit } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "../login.service";

@Injectable({
  providedIn: "root",
})
export class EditGuard implements CanActivate{

  
  constructor(private loginService: LoginService,private router:Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {

      if (this.loginService.userLoggedIn) {
        //   alert("loggedIn");
          return true;
      }
      else {
       
        //   this.router.navigate['/sdfsed/about'];
        //   this.router.navigate(['/prods/edit']);
        //   alert("not logged in");
          let x = confirm("Do you want to login ? ");
          console.log(x);
          if (x) {
            this.router.navigate(['/login']);//=> paran
          }
          return false;
      }
      
  }
}
