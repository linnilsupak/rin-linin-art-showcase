import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RinLininInfoComponent } from './rin-linin-info.component';

describe('RinLininInfoComponent', () => {
  let component: RinLininInfoComponent;
  let fixture: ComponentFixture<RinLininInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RinLininInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RinLininInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
