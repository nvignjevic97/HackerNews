import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobStoriesComponent } from './job-stories.component';

describe('JobStoriesComponent', () => {
  let component: JobStoriesComponent;
  let fixture: ComponentFixture<JobStoriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobStoriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobStoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
