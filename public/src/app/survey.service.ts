import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SurveyService {
  allSurveys = [];
  surveyObserver = new BehaviorSubject(this.allSurveys);

  oneSurvey = {};
  oneSurveyObserver = new BehaviorSubject(this.oneSurvey);

  constructor(private _router: Router, private _http: Http) {
    this.getAllSurveys();
  }

  createPoll(survey) {
    console.log(survey, "+++++++++++")
    this._http.post(`/survey.json`, survey)
      .subscribe(data => {
        console.log('Poll created succesuful', data.json());
        this.allSurveys = data.json();
        this.surveyObserver.next(this.allSurveys);
        this._router.navigate(['dashboard']);
      }, err => {
        console.log("Error create poll", err)
      })
  }

  getAllSurveys() {
    this._http.get(`/survey.json`)
      .subscribe(data => {
        console.log('All pplls got succesuful', data.json());
        this.allSurveys = data.json();
        this.surveyObserver.next(this.allSurveys);
      }, err => {
        console.log("getting all polls error", err)
      })
  }

  deleteSurvey(id) {
    this._http.delete(`/survey.json/${id}`)
      .subscribe(data => {
        console.log('All pplls got succesuful after deletion', data.json());
        this.allSurveys = data.json();
        this.surveyObserver.next(this.allSurveys);
      }, err => {
        console.log("getting all polls after deletion error", err)
      })
  }

  getOneSurvey(id) {
    this._http.get(`/surveyone.json/${id}`)
      .subscribe(data => {
        console.log("got one survey", data.json());
        this.oneSurvey = data.json();
        this.oneSurveyObserver.next(this.oneSurvey);
      }, err => {
        console.log("error getting one survey", err);
      })
  }

  updateSurvey(survey) {
    this._http.put(`/surveyone.json/${survey._id}`, survey)
      .subscribe(data => {
        console.log("updated one survey", data.json());
        this.oneSurvey = data.json();
        this.oneSurveyObserver.next(this.oneSurvey);
      }, err => {
        console.log("error updating one survey", err);
      })

  }
}
