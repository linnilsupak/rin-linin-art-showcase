import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryRoomComponent } from './gallery-room.component';

describe('GalleryRoomComponent', () => {
  let component: GalleryRoomComponent;
  let fixture: ComponentFixture<GalleryRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GalleryRoomComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
