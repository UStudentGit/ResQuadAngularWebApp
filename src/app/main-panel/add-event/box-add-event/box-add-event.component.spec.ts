import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxAddEventComponent } from './box-add-event.component';

describe('BoxAddEventComponent', () => {
  let component: BoxAddEventComponent;
  let fixture: ComponentFixture<BoxAddEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxAddEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxAddEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
