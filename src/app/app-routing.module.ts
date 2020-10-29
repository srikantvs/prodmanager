import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { LogoutGuard } from './guards/logout.guard';
import { SignupComponent } from './signup/signup.component';
import { AnalyticsComponent } from './analytics/analytics.component';
import { DirtyformGuard } from './guards/dirtyform.guard';


const routes: Route[] = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate:[LogoutGuard]
  },
  {
    path: 'prods',
    loadChildren: () => import('./prods/prods.module').then(m => m.ProdsModule)
  },
  {
    path: 'signup',
    component: SignupComponent,canDeactivate:[DirtyformGuard]
  },
  {
    path: 'analytics',
    component:AnalyticsComponent
  },
  {
    path: '',
    component:AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
  
})
export class AppRoutingModule { }
