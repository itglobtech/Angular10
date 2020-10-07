import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeesComponent } from './employees.component';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';
import { EmployeesDetailsComponent } from './components/employees-details/employees-details.component';


@NgModule({
  declarations: [EmployeesComponent, EmployeesListComponent, EmployeesDetailsComponent],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
