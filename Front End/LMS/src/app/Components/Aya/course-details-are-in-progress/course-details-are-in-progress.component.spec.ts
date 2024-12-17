import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsAreInProgressComponent } from './course-details-are-in-progress.component';

describe('CourseDetailsAreInProgressComponent', () => {
  let component: CourseDetailsAreInProgressComponent;
  let fixture: ComponentFixture<CourseDetailsAreInProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseDetailsAreInProgressComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseDetailsAreInProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
