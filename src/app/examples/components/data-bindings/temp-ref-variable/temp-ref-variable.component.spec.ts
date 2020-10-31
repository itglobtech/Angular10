import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempRefVariableComponent } from './temp-ref-variable.component';

describe('TempRefVariableComponent', () => {
  let component: TempRefVariableComponent;
  let fixture: ComponentFixture<TempRefVariableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TempRefVariableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TempRefVariableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
