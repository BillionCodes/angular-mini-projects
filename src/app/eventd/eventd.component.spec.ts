import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdComponent } from './eventd.component';

describe('EventdComponent', () => {
  let component: EventdComponent;
  let fixture: ComponentFixture<EventdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
