import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SweetArtComponent } from './sweet-art.component';

describe('SweetArtComponent', () => {
  let component: SweetArtComponent;
  let fixture: ComponentFixture<SweetArtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SweetArtComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SweetArtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
