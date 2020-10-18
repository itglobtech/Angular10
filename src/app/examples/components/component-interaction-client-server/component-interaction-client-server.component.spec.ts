import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentInteractionClientServerComponent } from './component-interaction-client-server.component';

describe('ComponentInteractionClientServerComponent', () => {
  let component: ComponentInteractionClientServerComponent;
  let fixture: ComponentFixture<ComponentInteractionClientServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentInteractionClientServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentInteractionClientServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
