import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import {ProfileCreationComponent} from './profile-creation/profile-creation.component';
import { HomePageComponent } from './home-page/home-page.component';
import {ProfileDetailsComponent} from './profile-details/profile-details.component';
import {PersonalProfileComponent} from './personal-profile/personal-profile.component';
import {LessonsComponent} from './lessons/lessons.component'; // Import the home page component

export const routes: Routes = [
  { path: '', component: HomePageComponent }, // Default route for the home page
  {path:'profile-creation', component:ProfileCreationComponent},
  { path: 'view-profile', component: ViewProfileComponent },
  { path: 'profile-details/:id', component: ProfileDetailsComponent },
  { path: 'personal-profile', component: PersonalProfileComponent },
  { path: 'lessons', component: LessonsComponent },
];
