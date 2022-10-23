import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisForm195Component } from './sis-form195.component';

describe('SisForm195Component', () => {
  let component: SisForm195Component;
  let fixture: ComponentFixture<SisForm195Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SisForm195Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisForm195Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
