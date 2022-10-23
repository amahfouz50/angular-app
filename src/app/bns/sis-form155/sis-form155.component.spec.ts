import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisForm155Component } from './sis-form155.component';

describe('SisForm155Component', () => {
  let component: SisForm155Component;
  let fixture: ComponentFixture<SisForm155Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SisForm155Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisForm155Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
