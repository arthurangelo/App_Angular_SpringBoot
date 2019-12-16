import { Injectable, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './user';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { tap, map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

let headers = new HttpHeaders({
  'Content-Type': 'application/json'
});
let options = {
  headers: headers
}

@Injectable()
export class LoginServiceService {

  private link_servico: string = 'http://localhost:8080/auth';

  public showNavBarEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();    

  private authenticated = false;

  constructor(private router: Router,private http: HttpClient) { }

  signIn(user: User){
    this.http.post(this.link_servico + '/login', JSON.stringify(user), options).pipe(tap(
      data => this.session(data),
      error => this.authenticated = false)).subscribe();
    }

  logout(){
    this.authenticated = false;
    this.showNavBar(false);
    this.router.navigate(['/signin']);
  }

  isAuthenticated(){
    return this.authenticated; 
  }
  private showNavBar(ifShow: boolean){
    this.showNavBarEmitter.emit(ifShow);
  }
  session(data) {
    
    localStorage.setItem('token', JSON.stringify(data.token));
    this.authenticated=true;
    this.showNavBar(true);
    this.router.navigate(['/']);
  }

}
