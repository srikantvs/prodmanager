import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { NewUser } from "../models/NewUser";

@Injectable({
  providedIn: "root",
})
export class UserService {
  private baseUrl: string;

  httpOptions = {
    headers: new HttpHeaders({"Content-Type": "application/json"}),
  };

  httpOptionString = {
    headers: new HttpHeaders().set("Content-Type", "text/plain; charset=utf-8"),
  };

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/users";
  }
  addnNewUser(newUser: NewUser): Observable<NewUser> {
    return this.http.post<NewUser>(this.baseUrl, newUser, this.httpOptions);
  }

  getUsers(): Observable<NewUser[]> {
    return this.http.get<NewUser[]>(this.baseUrl);
  }

  
}
