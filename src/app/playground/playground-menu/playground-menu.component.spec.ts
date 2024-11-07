import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaygroundMenuComponent } from './playground-menu.component';

describe('PlaygroundMenuComponent', () => {
  let component: PlaygroundMenuComponent;
  let fixture: ComponentFixture<PlaygroundMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaygroundMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaygroundMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
