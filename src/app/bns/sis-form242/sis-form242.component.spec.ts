import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisForm242Component } from './sis-form242.component';

describe('SisForm242Component', () => {
  let component: SisForm242Component;
  let fixture: ComponentFixture<SisForm242Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SisForm242Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisForm242Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
