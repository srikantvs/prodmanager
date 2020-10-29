import { Component, OnInit } from "@angular/core";
import { LoginService } from "../services/login.service";
import { HeaderService } from "./header.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  userName: string;
  constructor(public loginService: LoginService) { }
  
  ngOnInit() {
    this.loginService.uxName.subscribe(x => this.userName = x);
   }
}
