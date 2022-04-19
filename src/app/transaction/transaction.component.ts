import { Component, Input, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ITransaction } from '../interfaces/itransaction';
import * as moment from 'moment';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICategory } from '../interfaces/icategory';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent implements OnInit {
  min_date: any;
  max_date: any;
  transactions!: ITransaction[]
  categories!: ICategory[];
  incomeForm: any;
  outcomeForm: any;

  constructor(private api: ApiService) {

  }

  ngOnInit(): void {
    this.getDate();
    this.getTransactions()
    this.api.dateUpdate.subscribe(res => {
      this.min_date = res.min_date
      this.max_date = res.max_date
      this.getTransactions()
    });

    this.incomeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      value: new FormControl('', Validators.required),
      category_id: new FormControl('', Validators.required),
    });

    this.outcomeForm = new FormGroup({
      name: new FormControl('', Validators.required),
      value: new FormControl('', Validators.required),
      category_id: new FormControl('', Validators.required),
    });
  }

  getDate() {
    this.min_date = this.api.getMinDate();
    this.max_date = this.api.getMaxDate();
    console.log(this.min_date)
  }

  getTransactions() {
    this.api.getTransactions(this.min_date, this.max_date).subscribe((res: ITransaction[]) => {
      this.transactions = res
      this.api.getCategories().subscribe((res: ICategory[]) => {
        this.categories = res
        this.transactions.forEach(element => {
          var result = this.categories.filter(t => t.id === element.category_id);
          element.category_name = result[0].name
        });
      })
    })
  }

  incomeSubmit() {
    let transaction = this.incomeForm.value
    transaction.date = moment().format('MM/DD/YYYY')
    transaction.type = 'Income'
    transaction.category_id = Number(transaction.category_id)
    this.api.addTransaction(transaction).subscribe((res: ITransaction) => {
      this.getTransactions()
    })
  }

  outcomeSubmit() {
    let transaction = this.outcomeForm.value
    transaction.date = moment().format('MM/DD/YYYY')
    transaction.type = 'Outcome'
    transaction.category_id = Number(transaction.category_id)
    this.api.addTransaction(transaction).subscribe((res: ITransaction) => {
      this.getTransactions()
    })
  }
}
