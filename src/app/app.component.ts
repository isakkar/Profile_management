import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {StudentProfilePageComponent} from './student-profile-page/student-profile-page.component';
import {NgbDropdown, NgbDropdownMenu, NgbDropdownToggle} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentProfilePageComponent, RouterLink, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'SE_project';
}
