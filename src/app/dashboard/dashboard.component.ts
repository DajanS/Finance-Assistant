import { Component, EventEmitter, OnInit } from '@angular/core';
import { min } from 'moment';
import { ApiService } from '../api.service';
import { ITransaction } from '../interfaces/itransaction';
import * as moment from 'moment';
import { ICategory } from '../interfaces/icategory';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {
  min_date: any;
  max_date: any;
  transactions!: ITransaction[];
  saldo!: number;
  outcome: number = 0;
  income: number = 0;
  date!: String;
  categories!: ICategory[]
  cat_transactions: ITransaction[] = [];

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getDate()
    this.api.dateUpdate.subscribe(res => {
      this.min_date = res.min_date
      this.max_date = res.max_date
      this.getInformations();
      this.date = this.min_date + ' - ' + this.max_date
    });
  }

  getDate() {
    this.min_date = this.api.getMinDate();
    this.max_date = this.api.getMaxDate();
  }

  getInformations() {
    this.cat_transactions = []
    this.saldo = 0;
    this.income = 0;
    this.outcome = 0;
    this.api.getTransactions(this.min_date, this.max_date).subscribe((res: ITransaction[]) => {
      this.transactions = res;
      this.transactions.forEach(element => {
        if (element.type == 'Income') {
          this.income = this.income + Number(element.value);
        } else {
          this.outcome = this.outcome + Number(element.value)
        }
      });

      this.api.getCategories().subscribe((res: ICategory[]) => {
        this.categories = res
        this.categories.forEach(element => {
          let temp_amount = 0;
          var items = this.transactions.filter(t => t.category_id === element.id).length;
          element.items = items
          let amount = this.transactions.filter(t => t.category_id === element.id)
          amount.forEach(e => {
            temp_amount = Number(temp_amount) + Number(e.value)
            element.amount = temp_amount

          });
        });

        this.categories.sort((a, b) => (a.items > b.items) ? -1 : 1)
      })
    })
  }


  setCategoryTransaction(id: number | undefined) {
    this.cat_transactions = []
    this.transactions.forEach(element => {
      if (element.category_id == id) {
        this.cat_transactions.push(element)
      }
    })
  }
}
