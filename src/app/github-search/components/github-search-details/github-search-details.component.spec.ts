import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSearchDetailsComponent } from './github-search-details.component';

describe('GithubSearchDetailsComponent', () => {
  let component: GithubSearchDetailsComponent;
  let fixture: ComponentFixture<GithubSearchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubSearchDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubSearchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
