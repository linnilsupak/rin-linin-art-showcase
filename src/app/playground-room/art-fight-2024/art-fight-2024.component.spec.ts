import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtFight2024Component } from './art-fight-2024.component';

describe('ArtFight2024Component', () => {
  let component: ArtFight2024Component;
  let fixture: ComponentFixture<ArtFight2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArtFight2024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArtFight2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
