import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundBottomMenuComponent } from './playground-bottom-menu.component';

describe('PlaygroundBottomMenuComponent', () => {
  let component: PlaygroundBottomMenuComponent;
  let fixture: ComponentFixture<PlaygroundBottomMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaygroundBottomMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaygroundBottomMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
