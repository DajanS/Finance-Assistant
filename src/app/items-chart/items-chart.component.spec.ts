import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsChartComponent } from './items-chart.component';

describe('ItemsChartComponent', () => {
  let component: ItemsChartComponent;
  let fixture: ComponentFixture<ItemsChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
