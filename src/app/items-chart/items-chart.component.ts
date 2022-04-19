import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ITransaction } from '../interfaces/itransaction';

@Component({
  selector: 'app-items-chart',
  templateUrl: './items-chart.component.html',
  styleUrls: ['./items-chart.component.css']
})
export class ItemsChartComponent implements OnInit, OnChanges {
  @Input() transactions!: ITransaction[];
  data: any = []
  barChartOptions: any
  barChartData: any
  barChartLabels: any
  barChartLegend: any;
  barChartType: any
  barChartColors: any;
  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    this.getData()
  }

  ngOnInit(): void {
    this.getData()
  }

  getData() {
    this.data = []
    this.transactions.forEach(element => {
      if (element.type == 'Outcome') {
        let tempData = {
          value: element.value,
          label: element.name
        }
        this.data.push({ data: [tempData.value], label: tempData.label })
      }
    });

    this.barChartOptions = {
      scaleShowVerticalLines: false,
      responsive: true
    };

    this.barChartLabels = ['Outcome Transactions Chart'];
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.barChartColors = ["#fff"]
    this.barChartData = this.data
    this.transactions
  }

}
