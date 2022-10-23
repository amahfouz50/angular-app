import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisForm157Component } from './sis-form157.component';

describe('SisForm157Component', () => {
  let component: SisForm157Component;
  let fixture: ComponentFixture<SisForm157Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SisForm157Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisForm157Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
