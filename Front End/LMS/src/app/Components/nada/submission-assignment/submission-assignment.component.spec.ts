import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionAssignmentComponent } from './submission-assignment.component';

describe('SubmissionAssignmentComponent', () => {
  let component: SubmissionAssignmentComponent;
  let fixture: ComponentFixture<SubmissionAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubmissionAssignmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubmissionAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
