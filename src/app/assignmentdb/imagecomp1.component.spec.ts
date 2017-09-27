import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Imagecomp1Component } from './imagecomp1.component';

describe('Imagecomp1Component', () => {
  let component: Imagecomp1Component;
  let fixture: ComponentFixture<Imagecomp1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Imagecomp1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Imagecomp1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
