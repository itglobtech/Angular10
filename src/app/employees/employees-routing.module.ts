import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesListComponent } from './components/employees-list/employees-list.component';

import { EmployeesComponent } from './employees.component';

const routes: Routes = [
  { path: '', component: EmployeesComponent },
{path:'list',component:EmployeesListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
