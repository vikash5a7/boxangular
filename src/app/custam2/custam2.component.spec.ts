import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Custam2Component } from './custam2.component';

describe('Custam2Component', () => {
  let component: Custam2Component;
  let fixture: ComponentFixture<Custam2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Custam2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Custam2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
