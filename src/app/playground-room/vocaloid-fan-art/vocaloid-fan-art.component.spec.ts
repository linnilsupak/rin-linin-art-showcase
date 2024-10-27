import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VocaloidFanArtComponent } from './vocaloid-fan-art.component';

describe('VocaloidFanArtComponent', () => {
  let component: VocaloidFanArtComponent;
  let fixture: ComponentFixture<VocaloidFanArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VocaloidFanArtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VocaloidFanArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
