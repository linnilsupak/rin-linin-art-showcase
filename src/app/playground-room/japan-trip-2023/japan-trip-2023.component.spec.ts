import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JapanTrip2023Component } from './japan-trip-2023.component';

describe('JapanTrip2023Component', () => {
  let component: JapanTrip2023Component;
  let fixture: ComponentFixture<JapanTrip2023Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JapanTrip2023Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JapanTrip2023Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
