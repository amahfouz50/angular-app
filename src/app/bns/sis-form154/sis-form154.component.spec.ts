import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SisForm154Component } from './sis-form154.component';

describe('SisForm154Component', () => {
  let component: SisForm154Component;
  let fixture: ComponentFixture<SisForm154Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SisForm154Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SisForm154Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
