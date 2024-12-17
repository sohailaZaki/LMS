import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyAssessmentCriteriaComponent } from './empty-assessment-criteria.component';

describe('EmptyAssessmentCriteriaComponent', () => {
  let component: EmptyAssessmentCriteriaComponent;
  let fixture: ComponentFixture<EmptyAssessmentCriteriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmptyAssessmentCriteriaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmptyAssessmentCriteriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
