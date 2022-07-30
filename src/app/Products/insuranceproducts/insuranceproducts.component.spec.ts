import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsuranceproductsComponent } from './insuranceproducts.component';

describe('InsuranceproductsComponent', () => {
  let component: InsuranceproductsComponent;
  let fixture: ComponentFixture<InsuranceproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsuranceproductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsuranceproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
