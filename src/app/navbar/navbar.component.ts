import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { ICycle } from '../interfaces/icycle';
import * as moment from 'moment';
import { ICurrency } from '../interfaces/icurrency';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})



export class NavbarComponent implements OnInit {
  @Output() minDate = new EventEmitter<any>();
  min_date: any;
  max_date: any;
  cycles!: ICycle[]
  currencies!: ICurrency[];
  activeCurrency!:number;

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.getDate()
    this.getCurencies()
  }

  getDate() {
    if (this.min_date == undefined) {
      this.min_date = moment().startOf('month').format('MM/DD/YYYY')
    }
    if (this.max_date == undefined) {
      this.max_date = moment().endOf('month').format('MM/DD/YYYY')
    }

    this.api.setMinDate(this.min_date);
    this.api.setMaxDate(this.max_date);
  }

  setMinDate(e: any) {
    let date = moment(e.target.value).format('MM/DD/YYYY')
    this.api.setMinDate(date);
  }

  setMaxDate(e: any) {
    let date = moment(e.target.value).format('MM/DD/YYYY')
    this.api.setMaxDate(date);
  }

  getCurencies(){
    this.api.getCurrencies().subscribe((res: ICurrency[])=>{
      this.currencies = res;
      if(this.activeCurrency == 0){
        this.activeCurrency=1
      }
    })
  }

  



}
