import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutMePicHeaderComponent } from './about-me-pic-header.component';

describe('AboutMePicHeaderComponent', () => {
  let component: AboutMePicHeaderComponent;
  let fixture: ComponentFixture<AboutMePicHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutMePicHeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutMePicHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
