import { Component } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-profile-creation',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './profile-creation.component.html',
  styleUrl: './profile-creation.component.css'
})
export class ProfileCreationComponent {
  profile: any = {
    surname: '',
    name: '',
    email: '',
    type: '',
    extraAttribute: ''
  };
  message: string | null = null;

  constructor(private profileService: ProfileService) {}

  onTypeChange(): void {
    // Clear extraAttribute when type changes
    this.profile.extraAttribute = '';
  }

  onSubmit(): void {
    const payload = {
      ...this.profile,
      ...(this.profile.type === 'professor' && {
        teaching: this.profile.extraAttribute.split(',').map((t: string) => t.trim())
      }),
      ...(this.profile.type === 'student' && { class: this.profile.extraAttribute })
    };

    console.log('Submitting payload:', payload); // Debugging

    this.profileService.addProfile(payload).subscribe({
      next: (res) => {
        console.log('Response from server:', res); // Debugging
        this.message = 'Profile added successfully!';
        this.profile = {
          surname: '',
          name: '',
          email: '',
          type: '',
          extraAttribute: ''
        };
      },
      error: (err) => {
        console.error('Error adding profile:', err);
        this.message = 'Failed to add profile. Please try again.';
      }
    });
  }

}
