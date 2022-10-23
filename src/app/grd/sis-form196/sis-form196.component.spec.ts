import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisForm196Component } from './sis-form196.component';

describe('SisForm196Component', () => {
  let component: SisForm196Component;
  let fixture: ComponentFixture<SisForm196Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SisForm196Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisForm196Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
