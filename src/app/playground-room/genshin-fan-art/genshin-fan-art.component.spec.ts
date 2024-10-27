import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenshinFanArtComponent } from './genshin-fan-art.component';

describe('GenshinFanArtComponent', () => {
  let component: GenshinFanArtComponent;
  let fixture: ComponentFixture<GenshinFanArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GenshinFanArtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GenshinFanArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
