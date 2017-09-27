import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignmentdbComponent } from './assignmentdb.component';

describe('AssignmentdbComponent', () => {
  let component: AssignmentdbComponent;
  let fixture: ComponentFixture<AssignmentdbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignmentdbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignmentdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
