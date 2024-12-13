import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailsComponent } from './course-detail.component';

describe('CourseDetailComponent', () => {
  let component: CourseDetailsComponent;
  let fixture: ComponentFixture<CourseDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CourseDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CourseDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
