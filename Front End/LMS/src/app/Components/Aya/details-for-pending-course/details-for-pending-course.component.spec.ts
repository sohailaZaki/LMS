import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsForPendingCourseComponent } from './details-for-pending-course.component';

describe('DetailsForPendingCourseComponent', () => {
  let component: DetailsForPendingCourseComponent;
  let fixture: ComponentFixture<DetailsForPendingCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailsForPendingCourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DetailsForPendingCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
