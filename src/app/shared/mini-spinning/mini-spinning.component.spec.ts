import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniSpinningComponent } from './mini-spinning.component';

describe('MiniSpinningComponent', () => {
  let component: MiniSpinningComponent;
  let fixture: ComponentFixture<MiniSpinningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniSpinningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniSpinningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
