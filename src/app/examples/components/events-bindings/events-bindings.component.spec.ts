import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsBindingsComponent } from './events-bindings.component';

describe('EventsBindingsComponent', () => {
  let component: EventsBindingsComponent;
  let fixture: ComponentFixture<EventsBindingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventsBindingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventsBindingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
