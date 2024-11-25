import { Routes } from '@angular/router';
import {StudentProfilePageComponent} from './student-profile-page/student-profile-page.component';
import {AppComponent} from './app.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';

export const routes: Routes = [
  {path:'student-profile-page', component: StudentProfilePageComponent},

  { path: 'view-profile', component: ViewProfileComponent },

];
