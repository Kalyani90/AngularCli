import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RowsmarketingComponent } from './rowsmarketing.component';

describe('RowsmarketingComponent', () => {
  let component: RowsmarketingComponent;
  let fixture: ComponentFixture<RowsmarketingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RowsmarketingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RowsmarketingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
