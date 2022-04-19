import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeItemsChartComponent } from './income-items-chart.component';

describe('IncomeItemsChartComponent', () => {
  let component: IncomeItemsChartComponent;
  let fixture: ComponentFixture<IncomeItemsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeItemsChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeItemsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
