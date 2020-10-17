import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInteractionAdvComponent } from './component-interaction-adv.component';

describe('ComponentInteractionAdvComponent', () => {
  let component: ComponentInteractionAdvComponent;
  let fixture: ComponentFixture<ComponentInteractionAdvComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentInteractionAdvComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInteractionAdvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
