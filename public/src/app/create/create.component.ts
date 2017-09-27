import { Component, OnInit } from '@angular/core';
import { Survey } from './survey';
import { SurveyService } from '../survey.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  survey: Survey = new Survey();
  username = "";

  constructor(private _surveyService: SurveyService, private _userService: UserService) {
    this._userService.userObserver.subscribe(username => {
      this.username = username;
    })
  }

  ngOnInit() {
  }

  createPoll() {
    this.survey.creator = this.username;
    console.log("submiting poll", this.survey);
    this._surveyService.createPoll(this.survey);
  }

}
