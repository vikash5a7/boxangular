import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustamComponent } from './custam.component';

describe('CustamComponent', () => {
  let component: CustamComponent;
  let fixture: ComponentFixture<CustamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
