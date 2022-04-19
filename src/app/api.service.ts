import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICategory } from './interfaces/icategory';
import { ITransaction } from './interfaces/itransaction';
import { ICurrency } from './interfaces/icurrency';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  }),
}
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000'
  cycle_id: number = 0;
  min_date!: Date;
  max_date!: Date;
  dateUpdate!: Observable<any>;
  private _dateUpdate!: BehaviorSubject<any>
  
  constructor(private http: HttpClient) {
    let initialDate = "";
    this._dateUpdate! = new BehaviorSubject(initialDate);
    this.dateUpdate = this._dateUpdate.asObservable();
  }

  getCategories(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>(`${this.apiUrl}/categories`);
  }

  setMinDate(date: any) {
    this.min_date = date;
    let newDate = {
      min_date: date,
      max_date: this.max_date
    }
    this._dateUpdate.next(newDate);
  }
  setMaxDate(date: any) {
    this.max_date = date;
    let newDate = {
      min_date: this.min_date,
      max_date: date
    }
    this._dateUpdate.next(newDate);
  }

  getMinDate() {
    return this.min_date;
  }

  getMaxDate() {
    return this.max_date;
  }

  getTransactions(min_date: any, max_date: any) {
    let param = {
      "date_gte": min_date,
      "date_lte": max_date
    }
    return this.http.get<ITransaction[]>(`${this.apiUrl}/transactions`, { params: param });
  }

  addCategory(category: ICategory): Observable<ICategory> {
    const url = `${this.apiUrl}/categories`;
    return this.http.post<ICategory>(url, category, httpOptions)
  }

  addTransaction(transaction: ITransaction): Observable<ITransaction> {
    const url = `${this.apiUrl}/transactions`;
    return this.http.post<ITransaction>(url, transaction, httpOptions)
  }

  getCurrencies():Observable<ICurrency[]>{
    return this.http.get<ICurrency[]>(`${this.apiUrl}/currencies`);
  }
  


}








