import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagePlacementComponent } from './image-placement.component';

describe('ImagePlacementComponent', () => {
  let component: ImagePlacementComponent;
  let fixture: ComponentFixture<ImagePlacementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImagePlacementComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImagePlacementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
