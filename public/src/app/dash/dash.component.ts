import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
  allSurveys = [];
  username = ""
  searchWord: String;
  
  constructor(private _surveyService: SurveyService, private _userService: UserService) {
    this._surveyService.surveyObserver.subscribe(surveys => {
      this.allSurveys = surveys;
    })
    this._userService.userObserver.subscribe(username => {
      this.username = username;
    })
  }

  ngOnInit() {
  }

  deleteSurvey(id){
    console.log("delete id ", id)
    this._surveyService.deleteSurvey(id);
  }
  stringAsDate(dateStr: string) {
    return new Date(dateStr);
  }

  logout(){
    this._userService.logout();
  }
}
