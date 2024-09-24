import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LininInfoComponent } from './linin-info.component';

describe('LininInfoComponent', () => {
  let component: LininInfoComponent;
  let fixture: ComponentFixture<LininInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LininInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LininInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
