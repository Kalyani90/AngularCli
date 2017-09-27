import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Buttoncomp2Component } from './buttoncomp2.component';

describe('Buttoncomp2Component', () => {
  let component: Buttoncomp2Component;
  let fixture: ComponentFixture<Buttoncomp2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Buttoncomp2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Buttoncomp2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
