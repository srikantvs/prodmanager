import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { SignupComponent } from '../signup/signup.component';

@Injectable({
  providedIn: 'root'
})
export class DirtyformGuard implements CanDeactivate<SignupComponent> {

  canDeactivate(component: SignupComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (component.addUserForm.dirty && !component.addUserForm.submitted)
      return confirm("Are you sure you have unsaved changes ?");
    else
      return true;
  }
 
  
}
