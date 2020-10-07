import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GithubSearchRoutingModule } from './github-search-routing.module';
import { GithubSearchComponent } from './github-search.component';
import { GithubSearchListComponent } from './components/github-search-list/github-search-list.component';
import { GithubSearchDetailsComponent } from './components/github-search-details/github-search-details.component';


@NgModule({
  declarations: [GithubSearchComponent, GithubSearchListComponent, GithubSearchDetailsComponent],
  imports: [
    CommonModule,
    GithubSearchRoutingModule
  ]
})
export class GithubSearchModule { }
