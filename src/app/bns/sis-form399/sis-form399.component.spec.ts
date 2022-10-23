import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisForm399Component } from './sis-form399.component';

describe('SisForm399Component', () => {
  let component: SisForm399Component;
  let fixture: ComponentFixture<SisForm399Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SisForm399Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisForm399Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
