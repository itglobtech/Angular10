import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerListComponent } from './components/customer-list/customer-list.component';

import { CustomersComponent } from './customers.component';

const routes: Routes = [{ path: '', component: CustomersComponent },
{path:'list',component:CustomerListComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
