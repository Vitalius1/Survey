import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class UserService {
  username = "";
  userObserver = new BehaviorSubject(this.username);

  constructor(private _http: Http, private _router: Router) {
  }

  // checkSession() {
  //   this._http.get(`/checkSession.json`)
  //     .subscribe(data => {
  //       if (data.json().logged) {
  //         this.username = data.json().username;
  //         this.userObserver.next(this.username);
  //       } else {
  //         this._router.navigate(['', '']);
  //       }
  //     })
  // }

  login(user) {
    console.log("service login reached");
    this._http.post(`/login.json`, user)
      .subscribe(data => {
        console.log('logged in succesufuly')
        this.username = data.json().username;
        this.userObserver.next(this.username);
        this._router.navigate(['dashboard']);
      }, err => {
        console.log("Error login");
      })
  }
}
