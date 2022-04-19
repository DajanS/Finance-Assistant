import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ITransaction } from '../interfaces/itransaction';

@Component({
  selector: 'app-categories-transaction',
  templateUrl: './categories-transaction.component.html',
  styleUrls: ['./categories-transaction.component.css']
})
export class CategoriesTransactionComponent implements OnInit{
  @Input() cat_transactions!: ITransaction[]

  constructor() { }
 
 

  ngOnInit(): void {

  }

}
