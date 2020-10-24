import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginService } from './login.service';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { ChartsModule, ThemeService } from 'ng2-charts';
import { AnalyticsComponent } from './analytics/analytics.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    LoginComponent,
    LogoutComponent,
    SignupComponent,
    AnalyticsComponent,
    
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule, AppRoutingModule,ChartsModule
  ],
  providers: [LoginService,ThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
