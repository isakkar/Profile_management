import { Component, OnInit } from '@angular/core';
import {DatePipe, NgIf, NgSwitchCase} from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-personal-profile',
  standalone: true,
  imports: [
    DatePipe,
    NgIf,
    NgSwitchCase,
    CommonModule
  ],
  templateUrl: './personal-profile.component.html',
  styleUrl: './personal-profile.component.css'
})
export class PersonalProfileComponent implements OnInit {
  profile: any = null;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    this.profileService.getProfileById('2').subscribe({
      next: (data) => (this.profile = data),
      error: (err) => {
        console.error('Error fetching profile:', err);
        this.error = 'Failed to load profile details.';
      },
    });
  }
}
