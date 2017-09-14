import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InLilSamComponent } from './in-lil-sam.component';

describe('InLilSamComponent', () => {
  let component: InLilSamComponent;
  let fixture: ComponentFixture<InLilSamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InLilSamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InLilSamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
