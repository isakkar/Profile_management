import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfileService } from '../services/profile.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-profile-details',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './profile-details.component.html',
  styleUrl: './profile-details.component.css'
})
export class ProfileDetailsComponent implements OnInit {
  profile: any = null;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profileService: ProfileService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id'); // Get profile ID from the route
    if (id) {
      this.profileService.getProfileById(id).subscribe({
        next: (data) => (this.profile = data),
        error: (err) => {
          console.error('Error fetching profile:', err);
          this.error = 'Failed to load profile details.';
        },
      });
    } else {
      this.error = 'Profile ID not provided.';
    }
  }

  deleteProfile(): void {
    if (this.profile && this.profile.id) {
      if (confirm('Are you sure you want to delete this profile?')) {
        this.profileService.deleteProfile(this.profile.id).subscribe({
          next: () => {
            alert('Profile deleted successfully.');
            this.router.navigate(['/view-profile']);
          },
          error: (err) => {
            console.error('Error deleting profile:', err);
            alert('Failed to delete profile. Please try again.');
          },
        });
      }
    }
  }
}
