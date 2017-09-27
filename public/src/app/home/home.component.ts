import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from '../user.service';
import { SurveyService } from '../survey.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User = new User();
  
  constructor(private _userService: UserService, private _surveyService: SurveyService) {
    this._surveyService.getAllSurveys();
  }

  ngOnInit() {
  }

  login() {
    console.log("Login click");
    console.log(this.user);
    this._userService.login(this.user);
  }
}
