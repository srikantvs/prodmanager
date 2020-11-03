import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanDeactivate } from '@angular/router';
import { Observable } from 'rxjs';
import { EditprodComponent } from '../prods/editprod/editprod.component';

@Injectable({
  providedIn: 'root'
})
export class EditproductGuard implements CanDeactivate<EditprodComponent> {
  canDeactivate(component: EditprodComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if (component.addUserForm.touched && !component.disableMe) {
      console.log(component.disableMe+"----))")
      return confirm("Are you sure you have unsaved changes ?");
    }
    // else {
    //   console.log(component.disableMe+"---->>")
    //   return true;
    // }
    return true;
    
  }
  
}
