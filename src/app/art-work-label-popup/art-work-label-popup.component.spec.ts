import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtWorkLabelPopupComponent } from './art-work-label-popup.component';

describe('ArtWorkLabelPopupComponent', () => {
  let component: ArtWorkLabelPopupComponent;
  let fixture: ComponentFixture<ArtWorkLabelPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtWorkLabelPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtWorkLabelPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
