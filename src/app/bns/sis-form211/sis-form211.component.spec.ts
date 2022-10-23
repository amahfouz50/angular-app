import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisForm211Component } from './sis-form211.component';

describe('SisForm211Component', () => {
  let component: SisForm211Component;
  let fixture: ComponentFixture<SisForm211Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SisForm211Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisForm211Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
