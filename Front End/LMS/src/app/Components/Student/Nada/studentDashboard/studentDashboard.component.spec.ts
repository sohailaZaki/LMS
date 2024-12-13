import { ComponentFixture, TestBed } from '@angular/core/testing';

import { studentDashboardComponent } from './studentDashboard.component';

describe('studentDashboardComponent', () => {
  let component: studentDashboardComponent;
  let fixture: ComponentFixture<studentDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [studentDashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(studentDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
