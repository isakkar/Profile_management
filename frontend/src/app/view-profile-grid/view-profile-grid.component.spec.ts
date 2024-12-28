import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfileGridComponent } from './view-profile-grid.component';

describe('ViewProfileGridComponent', () => {
  let component: ViewProfileGridComponent;
  let fixture: ComponentFixture<ViewProfileGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewProfileGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProfileGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
