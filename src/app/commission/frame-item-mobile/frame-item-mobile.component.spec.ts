import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameItemMobileComponent } from './frame-item-mobile.component';

describe('FrameItemMobileComponent', () => {
  let component: FrameItemMobileComponent;
  let fixture: ComponentFixture<FrameItemMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameItemMobileComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrameItemMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
