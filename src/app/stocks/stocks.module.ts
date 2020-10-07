import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksRoutingModule } from './stocks-routing.module';
import { StocksComponent } from './stocks.component';
import { StocksListComponent } from './components/stocks-list/stocks-list.component';
import { StocksDetailsComponent } from './components/stocks-details/stocks-details.component';


@NgModule({
  declarations: [StocksComponent, StocksListComponent, StocksDetailsComponent],
  imports: [
    CommonModule,
    StocksRoutingModule
  ]
})
export class StocksModule { }
