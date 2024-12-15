import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-view-profile',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.css'
})
export class ViewProfileComponent implements OnInit{
  profiles: any[] = [];
  message: string | null = null;

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.loadProfiles();
  }

  loadProfiles(): void {
    this.profileService.getProfiles().subscribe({
      next: (profiles) => {
        this.profiles = profiles;
      },
      error: (err) => {
        console.error('Error loading profiles:', err);
        this.message = 'Failed to load profiles. Please try again later.';
      }
    });
  }
}
