import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundRoomParentComponent } from './playground-room-parent.component';

describe('PlaygroundRoomParentComponent', () => {
  let component: PlaygroundRoomParentComponent;
  let fixture: ComponentFixture<PlaygroundRoomParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaygroundRoomParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaygroundRoomParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
