import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { ICategory } from '../interfaces/icategory';

@Component({
  selector: 'app-categories-chart',
  templateUrl: './categories-chart.component.html',
  styleUrls: ['./categories-chart.component.css']
})
export class CategoriesChartComponent implements OnInit, OnChanges {
  @Input() categories!: ICategory[]
  data: number[] = []
  public doughnutChartLabels: String[] = [];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [] },

    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.getData()
    console.log(this.categories)
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.data = []
    this.doughnutChartLabels = []
    this.categories.forEach(element => {
      this.data.push(Number(element.amount))
      this.doughnutChartLabels.push(element.name)
    });

    this.doughnutChartData = {
      labels: this.doughnutChartLabels,
      datasets: [
        { data: this.data },
      ]
    };

  }
  OnChanges() {
    this.ngOnInit()
  }

}
