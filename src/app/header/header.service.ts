import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class HeaderService {

  userName: string = 'Signn In';

  constructor() {
    
  }

  getUserName() {
    return this.userName;
  }

  setUserName(uname:string) {
    this.userName = uname;
    console.log("test" + this.userName);
  }

}
