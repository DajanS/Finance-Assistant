import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesTransactionComponent } from './categories-transaction.component';

describe('CategoriesTransactionComponent', () => {
  let component: CategoriesTransactionComponent;
  let fixture: ComponentFixture<CategoriesTransactionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoriesTransactionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoriesTransactionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
