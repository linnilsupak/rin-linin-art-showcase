import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrameItemAnimationComponent } from './frame-item-animation.component';

describe('FrameItemAnimationComponent', () => {
  let component: FrameItemAnimationComponent;
  let fixture: ComponentFixture<FrameItemAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FrameItemAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FrameItemAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
