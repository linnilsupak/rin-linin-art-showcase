import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VtuberFanArtComponent } from './vtuber-fan-art.component';

describe('VtuberFanArtComponent', () => {
  let component: VtuberFanArtComponent;
  let fixture: ComponentFixture<VtuberFanArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VtuberFanArtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VtuberFanArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
