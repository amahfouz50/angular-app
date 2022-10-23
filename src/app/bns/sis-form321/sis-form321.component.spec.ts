import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisForm321Component } from './sis-form321.component';

describe('SisForm321Component', () => {
  let component: SisForm321Component;
  let fixture: ComponentFixture<SisForm321Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SisForm321Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisForm321Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
