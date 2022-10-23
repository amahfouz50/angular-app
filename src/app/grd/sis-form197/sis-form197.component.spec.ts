import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisForm197Component } from './sis-form197.component';

describe('SisForm197Component', () => {
  let component: SisForm197Component;
  let fixture: ComponentFixture<SisForm197Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SisForm197Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisForm197Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
