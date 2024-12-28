import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import type { ColDef } from 'ag-grid-community';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AgGridModule } from 'ag-grid-angular';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { themeAlpine } from 'ag-grid-community';

ModuleRegistry.registerModules([AllCommunityModule]);
const myTheme = themeAlpine.withParams({
  accentColor: 'blue',
  headerBackgroundColor: 'rgb(0, 123, 255)',
  headerTextColor: 'white'
});

@Component({
  selector: 'app-view-profile-grid',
  standalone: true,
  imports: [CommonModule, RouterLink, AgGridModule],
  templateUrl: './view-profile-grid.component.html',
  styleUrl: './view-profile-grid.component.css'
})
export class ViewProfileGridComponent implements OnInit {
  profiles: any[] = [];
  message: string | null = null;
  columnDefs: ColDef[] = [];
  rowData: any[] = [];
  gridOptions = {
    theme: myTheme
  };

  constructor(private profileService: ProfileService) {}

  ngOnInit(): void {
    this.loadProfiles();

    // Column Definitions
    this.columnDefs = [
      { headerName: 'ID', field: 'id', sortable: true, filter: true },
      { headerName: 'Surname', field: 'surname', sortable: true, filter: true },
      { headerName: 'Name', field: 'name', sortable: true, filter: true },
      { headerName: 'Email', field: 'email', sortable: false, filter: false },
      { headerName: 'Type', field: 'type', sortable: false, filter: true },
      {
        headerName: 'Class',
        field: 'class',
        filter: true,
        valueGetter: (params: any) => params.data.type === 'student' ? params.data.class : null
      },
      {
        headerName: 'Teaching',
        field: 'teaching',
        filter: true,
        valueGetter: (params: any) => params.data.type === 'professor' ? params.data.teaching : null
      },
    ];
  }

  loadProfiles(): void {
    this.profileService.getProfiles().subscribe({
      next: (profiles) => {
        this.profiles = profiles;
        this.rowData = profiles; // Assign the profiles to rowData to display in the grid
      },
      error: (err) => {
        console.error('Error loading profiles:', err);
        this.message = 'Failed to load profiles. Please try again later.';
      }
    });
  }
}
