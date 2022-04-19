import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgChartsModule } from 'ng2-charts';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ConfiguratorComponent } from './configurator/configurator.component';
import { CategoriesComponent } from './categories/categories.component';
import { TransactionComponent } from './transaction/transaction.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionChartComponent } from './transaction-chart/transaction-chart.component';
import { CategoriesChartComponent } from './categories-chart/categories-chart.component';
import { ItemsChartComponent } from './items-chart/items-chart.component';
import { IncomeItemsChartComponent } from './income-items-chart/income-items-chart.component';
import { CategoriesTransactionComponent } from './categories-transaction/categories-transaction.component';
const appRoutes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'transactions', component: TransactionComponent}

]
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SidenavComponent,
    ConfiguratorComponent,
    CategoriesComponent,
    TransactionComponent,
    TransactionChartComponent,
    CategoriesChartComponent,
    ItemsChartComponent,
    IncomeItemsChartComponent,
    CategoriesTransactionComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes, {enableTracing : true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
