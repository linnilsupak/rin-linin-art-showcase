import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HalfCommissionExampleComponent } from './half-commission-example.component';

describe('HalfCommissionExampleComponent', () => {
  let component: HalfCommissionExampleComponent;
  let fixture: ComponentFixture<HalfCommissionExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HalfCommissionExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HalfCommissionExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
