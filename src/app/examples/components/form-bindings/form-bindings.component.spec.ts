import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormBindingsComponent } from './form-bindings.component';

describe('FormBindingsComponent', () => {
  let component: FormBindingsComponent;
  let fixture: ComponentFixture<FormBindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormBindingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
