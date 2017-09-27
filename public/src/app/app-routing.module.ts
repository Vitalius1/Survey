import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DashComponent } from './dash/dash.component';
import { CreateComponent } from './create/create.component';
import { SurveyComponent } from './survey/survey.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomeComponent },
  { path: 'dashboard', pathMatch: 'full', component: DashComponent },
  { path: 'create', pathMatch: 'full', component: CreateComponent },
  { path: 'poll/:id', pathMatch: 'full', component: SurveyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
