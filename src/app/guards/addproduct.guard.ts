import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AddComponent } from '../prods/add/add.component';

@Injectable({
  providedIn: 'root'
})
export class AddproductGuard implements CanDeactivate<AddComponent> {
  canDeactivate(component: AddComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (component.addUserForm.dirty && !component.addUserForm.submitted)
      return confirm("Are you sure you have unsaved changes ?");
    return true;
  }
  
}
