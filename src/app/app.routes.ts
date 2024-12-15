import { Routes } from '@angular/router';
import {StudentProfilePageComponent} from './student-profile-page/student-profile-page.component';
import {AppComponent} from './app.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import {ProfileCreationComponent} from './profile-creation/profile-creation.component';

export const routes: Routes = [
  {path:'student-profile-page', component: StudentProfilePageComponent},
  {path:'profile-creation', component:ProfileCreationComponent},
  { path: 'view-profile', component: ViewProfileComponent },

];
