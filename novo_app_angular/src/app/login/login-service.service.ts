import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {
  userCadastrado: any;
  private url = 'http://localhost:8080/signin';
  public showNavBarEmmiter: EventEmitter<boolean> = new EventEmitter<boolean>();
  private authenticated = false;
  constructor(private router: Router, private http: HttpClient) { }

  signIn(user: User) {
    this.http.post(this.url, user).subscribe(res => {
      console.log(res);
      if (res) {
        this.authenticated = true;
        this.showNavBar(true);
        this.router.navigate(['/']);
      } else {
        this.authenticated = false;
      }
    });

  }

  logout() {
    this.authenticated = false;
    this.showNavBar(false);
    this.router.navigate(['/signin']);
  }

  isAuthenticated(): boolean {
    return this.authenticated;
  }

  private showNavBar(ifShow: boolean) {
    this.showNavBarEmmiter.emit(ifShow);
  }

}
