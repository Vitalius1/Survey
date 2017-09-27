import { Component, OnInit } from '@angular/core';
import { SurveyService } from '../survey.service';
import { ActivatedRoute } from '@angular/router';
import { Survey } from '../create/survey';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {
  survey;

  constructor(private _surveyService: SurveyService, private _route: ActivatedRoute) {
    this._surveyService.oneSurveyObserver.subscribe(survey => {
      this.survey = survey;
    })
    this._route.paramMap
      .subscribe(params => {
        this._surveyService.getOneSurvey(params.get('id'));
      })
  }

  ngOnInit() {
  }

  addVote(num){
    if(num === 1){
      this.survey.option1count += 1;
    }
    if(num === 2){
      this.survey.option2count += 1;
    }
    if(num === 3){
      this.survey.option3count += 1;
    }
    if(num === 4){
      this.survey.option4count += 1;
    }
  }
  ngOnDestroy(){
    this._surveyService.updateSurvey(this.survey);
  }
}
