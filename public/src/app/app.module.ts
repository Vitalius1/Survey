import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { FilterPipe } from './filter.pipe';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DashComponent } from './dash/dash.component';
import { CreateComponent } from './create/create.component';
import { SurveyComponent } from './survey/survey.component';

import { UserService } from './user.service';
import { SurveyService } from './survey.service';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterPipe,
    DashComponent,
    CreateComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [UserService, SurveyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
