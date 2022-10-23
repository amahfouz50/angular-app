import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisForm243Component } from './sis-form243.component';

describe('SisForm243Component', () => {
  let component: SisForm243Component;
  let fixture: ComponentFixture<SisForm243Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SisForm243Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisForm243Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
