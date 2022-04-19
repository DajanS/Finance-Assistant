import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-transaction-chart',
  templateUrl: './transaction-chart.component.html',
  styleUrls: ['./transaction-chart.component.css']
})

export class TransactionChartComponent implements OnInit, OnChanges {
  @Input() income!: number
  @Input() outcome!: number
  @Input() date!: String
  barChartOptions: any
  barChartData: any
  barChartLabels: any
  barChartLegend: any;
  barChartType: any
  barChartColors: any;

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit()
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true
    };

    this.barChartLabels = [this.date];
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.barChartColors = ["#fff"]
    this.barChartData = [
      { data: [this.income], label: 'Income', backgroundColor: "#2dce89" },
      { data: [this.outcome], label: 'Outcome', backgroundColor: "#f5365c" }
    ];
  }



}
