import { Routes } from '@angular/router';
import {StudentProfilePageComponent} from './student-profile-page/student-profile-page.component';
import {AppComponent} from './app.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import {ProfileCreationComponent} from './profile-creation/profile-creation.component';
import { HomePageComponent } from './home-page/home-page.component';
import {ProfileDetailsComponent} from './profile-details/profile-details.component'; // Import the home page component

export const routes: Routes = [
  { path: '', component: HomePageComponent }, // Default route for the home page
  {path:'student-profile-page', component: StudentProfilePageComponent},
  {path:'profile-creation', component:ProfileCreationComponent},
  { path: 'view-profile', component: ViewProfileComponent },
  { path: 'profile-details/:id', component: ProfileDetailsComponent }, // Add this route
];
